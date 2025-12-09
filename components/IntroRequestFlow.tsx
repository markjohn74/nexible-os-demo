
import React, { useState } from 'react';
import { User, IntroRequest } from '../types';
import { CONNECTORS_POOL } from '../services/mockData';
import NetworkScanner from './NetworkScanner';
import { Check, ArrowRight, ShieldCheck, Info, AlertTriangle, FileSignature, Sparkles } from 'lucide-react';

interface Props {
  user: User;
  onClose: () => void;
  onSubmit: (req: IntroRequest) => void;
}

const IntroRequestFlow: React.FC<Props> = ({ user, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    targetName: '',
    targetCompany: '',
    reason: '', // Will map context to this if needed, or just use context
    context: '',
    agreedToCommission: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  // LOGIC HELPERS
  const isAccessFounder = user.role === 'AccessFounder';
  
  // Determine if Requester is an internal ecosystem member
  const isRequesterInternal = 
    user.role === 'PortfolioFounder_Connector' || 
    user.role === 'VC_Team' || 
    user.role === 'Investor_Connector';

  // Get details of selected connectors
  const selectedConnectorDetails = CONNECTORS_POOL.filter(c => selectedConnectors.includes(c.id));

  // Determine if ALL selected connectors are internal ecosystem members
  const areConnectorsInternal = selectedConnectorDetails.length > 0 && selectedConnectorDetails.every(c => 
    c.role === 'VC_Team' || 
    c.role === 'Investor_Connector' || 
    c.role === 'PortfolioFounder_Connector'
  );

  // Effective Commission Calculation
  // 1. Access Founders always pay 5% (Network Fee)
  // 2. Internal Members connecting to Internal Members pay 0% (Ecosystem Benefit)
  // 3. Otherwise standard 2.5%
  const isCommissionFree = !isAccessFounder && isRequesterInternal && areConnectorsInternal;
  const effectiveCommissionRate = isAccessFounder ? 5.0 : (isCommissionFree ? 0 : 2.5);

  const handleScanComplete = () => {
    setIsScanning(false);
    // Stay on Step 2 (Matches)
  };

  const startScan = () => {
    // Production Validation
    if (!formData.targetName.trim() || !formData.targetCompany.trim() || !formData.context.trim()) {
      setError("Please complete all fields to start the matching engine.");
      return;
    }
    setError(null);
    setStep(2);
    setIsScanning(true);
  };

  const toggleConnector = (id: string) => {
    if (selectedConnectors.includes(id)) {
      setSelectedConnectors(selectedConnectors.filter(c => c !== id));
    } else {
      setSelectedConnectors([...selectedConnectors, id]);
    }
  };

  const goToLegal = () => {
    if (selectedConnectors.length > 0) {
      setStep(3);
    }
  };

  const handleSubmit = () => {
    if (!formData.agreedToCommission) return;

    const req: IntroRequest = {
      id: `r-${Date.now()}`,
      requesterId: user.id,
      targetName: formData.targetName,
      targetCompany: formData.targetCompany,
      reason: formData.context, // Use context as reason for now
      context: formData.context,
      commissionRate: effectiveCommissionRate,
      status: 'AwaitingResponse',
      createdAt: new Date().toISOString(),
      connectorCommissionRate: selectedConnectorDetails[0]?.commissionRate // Capture specific connector rate
    };
    onSubmit(req);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-nexible-dark border border-nexible-panel rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-nexible-panel flex justify-between items-center bg-nexible-panel/30">
          <div>
            <h2 className="text-2xl font-bold text-white">Request Introduction</h2>
            <p className="text-nexible-muted text-sm">Step {step} of 3 • <span className="text-nexible-gold">Investible Network</span></p>
          </div>
          <button onClick={onClose} className="text-nexible-muted hover:text-white transition-colors">✕</button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* STEP 1: Details Form */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 mb-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-nexible-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    The Investible engine will search across <span className="text-white font-bold">25,000+ verified contacts</span> from our Partners, Investment Team, and LPs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-nexible-muted mb-1">Target Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-nexible-panel border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-nexible-gold outline-none font-medium"
                    placeholder="e.g. Mike Cannon-Brookes"
                    value={formData.targetName}
                    onChange={(e) => setFormData({...formData, targetName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-nexible-muted mb-1">Target Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-nexible-panel border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-nexible-gold outline-none font-medium"
                    placeholder="e.g. Atlassian"
                    value={formData.targetCompany}
                    onChange={(e) => setFormData({...formData, targetCompany: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-nexible-muted mb-1">The Ask (Context & Reason)</label>
                <textarea 
                  className="w-full bg-nexible-panel border border-slate-700 rounded-lg p-3 text-white h-32 focus:ring-2 focus:ring-nexible-gold outline-none"
                  placeholder="Why do you need this intro? Be specific to increase acceptance rate. (e.g. 'We have a signed pilot with a competitor...')"
                  value={formData.context}
                  onChange={(e) => setFormData({...formData, context: e.target.value})}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                   <AlertTriangle className="w-4 h-4" />
                   {error}
                </div>
              )}

              <button 
                onClick={startScan}
                className="w-full bg-nexible-gold text-black font-bold py-4 rounded-xl hover:bg-nexible-goldHover transition-all flex justify-center items-center gap-2 text-lg shadow-lg shadow-nexible-gold/10"
              >
                Find Connectors <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* STEP 2: Matches (with optional scanner overlay) */}
          {step === 2 && (
            <div className="h-full relative flex flex-col">
              {isScanning ? (
                <div className="flex flex-col items-center justify-center h-full py-10 space-y-8 animate-fade-in absolute inset-0 bg-nexible-dark z-10">
                  <NetworkScanner onComplete={handleScanComplete} />
                  <p className="text-center text-slate-400 text-sm max-w-sm">
                    Scanning Investible proprietary datasets: Partners, Investment Team (Fund IV), and Club Invest members...
                  </p>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white">Best Matches Found</h3>
                    <span className="text-xs font-mono text-nexible-gold bg-nexible-gold/10 px-2 py-1 rounded border border-nexible-gold/20">8 STRONG ROUTES</span>
                  </div>

                  <div className="grid gap-3 overflow-y-auto pr-2 flex-1 max-h-[400px]">
                    {CONNECTORS_POOL.map((connector) => (
                      <div 
                        key={connector.id}
                        onClick={() => toggleConnector(connector.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between group
                          ${selectedConnectors.includes(connector.id) 
                            ? 'bg-nexible-gold/10 border-nexible-gold' 
                            : 'bg-nexible-panel border-slate-700 hover:border-slate-500'}`}
                      >
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border border-slate-600">
                             <img src={connector.avatar} alt={connector.name} className="w-full h-full object-cover" />
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-white group-hover:text-nexible-gold transition-colors text-sm">{connector.name}</h4>
                            <p className="text-xs text-nexible-muted flex items-center gap-1">
                              {connector.role.replace('_', ' ').replace('Connector', '')} • <span className="text-white">{connector.company}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="text-right">
                             <div className="text-xs text-nexible-muted uppercase tracking-wider">Match</div>
                             <div className="text-lg font-mono font-bold text-emerald-400">{connector.matchScore}%</div>
                           </div>
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                             ${selectedConnectors.includes(connector.id) ? 'border-nexible-gold bg-nexible-gold text-black scale-110' : 'border-slate-600'}`}>
                             {selectedConnectors.includes(connector.id) && <Check className="w-4 h-4" />}
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    disabled={selectedConnectors.length === 0}
                    onClick={goToLegal}
                    className="w-full bg-nexible-gold text-black font-bold py-4 rounded-xl hover:bg-nexible-goldHover disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg shadow-lg shadow-nexible-gold/20 flex items-center justify-center gap-2 mt-4"
                  >
                    Proceed to Consent <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Legal & Commission */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 
                    ${isCommissionFree ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-slate-800 border-slate-700'}`}>
                    {isCommissionFree 
                      ? <Sparkles className="w-8 h-8 text-emerald-400" /> 
                      : <FileSignature className="w-8 h-8 text-white" />
                    }
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white text-center">
                {isCommissionFree ? 'Ecosystem Benefit Applied' : 'Legal Consent Required'}
              </h3>
              
              {!isCommissionFree && (
                <p className="text-slate-400 text-center text-sm px-4">
                  To maintain the integrity of the Investible ecosystem, all commercial introductions are subject to a standard success fee framework.
                </p>
              )}
              
              {isCommissionFree && (
                <p className="text-emerald-400 text-center text-sm px-4 font-medium">
                  Internal portfolio connections are subsidized by Investible to accelerate value creation.
                </p>
              )}

              {/* Commission & Legal Section */}
              <div className={`border rounded-xl p-6 mt-4 transition-colors 
                ${isAccessFounder ? 'bg-amber-900/10 border-amber-500/30' : 
                  isCommissionFree ? 'bg-emerald-900/10 border-emerald-500/30' : 
                  'bg-blue-900/10 border-blue-500/30'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg shrink-0 
                    ${isAccessFounder ? 'bg-amber-500/20' : 
                      isCommissionFree ? 'bg-emerald-500/20' : 
                      'bg-blue-500/20'}`}>
                    {isAccessFounder && <AlertTriangle className="w-6 h-6 text-amber-500" />}
                    {isCommissionFree && <Sparkles className="w-6 h-6 text-emerald-500" />}
                    {!isAccessFounder && !isCommissionFree && <ShieldCheck className="w-6 h-6 text-blue-500" />}
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm uppercase tracking-wide mb-2 
                      ${isAccessFounder ? 'text-amber-500' : 
                        isCommissionFree ? 'text-emerald-500' : 
                        'text-blue-500'}`}>
                      {isAccessFounder ? 'Commercial Liability Agreement (FAC)' : 
                        isCommissionFree ? 'Internal Ecosystem Protocol (0% Fee)' : 
                        'Standard Portfolio Protocol'}
                    </h4>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {isAccessFounder 
                        ? `As an Access Founder, you acknowledge a ${effectiveCommissionRate}% success fee on realized commercial value from this introduction. 2.5% is allocated to the Connector.`
                        : isCommissionFree
                        ? "Great news! As this is an internal connection between Investible portfolio members, no success fees apply to this introduction."
                        : `Standard network protocol applies (Maximum ${effectiveCommissionRate}% liability).`}
                    </p>
                    
                    <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-slate-600">
                      <input 
                        type="checkbox" 
                        className={`mt-1 w-5 h-5 rounded border-slate-600 bg-slate-800 shrink-0 
                          ${isAccessFounder ? 'text-amber-500 focus:ring-amber-500' : 
                            isCommissionFree ? 'text-emerald-500 focus:ring-emerald-500' : 
                            'text-blue-500 focus:ring-blue-500'}`}
                        checked={formData.agreedToCommission}
                        onChange={(e) => setFormData({...formData, agreedToCommission: e.target.checked})}
                      />
                      <span className="text-sm font-medium text-white group-hover:text-nexible-gold transition-colors">
                         {isCommissionFree 
                           ? "This introduction is commission-free as both parties are part of the Investible Portfolio Network. You agree to the legally binding contract."
                           : <span>I agree to the legally binding contract to allocate <span className="text-white font-bold underline">{effectiveCommissionRate}%</span> of the final commercial deal value to the Connector, unless manually zeroed out by the Connector.</span>
                         }
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                 <button 
                  onClick={() => setStep(2)}
                  className="px-6 py-4 rounded-xl border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all"
                >
                  Back
                </button>
                <button 
                  disabled={!formData.agreedToCommission}
                  onClick={handleSubmit}
                  className="flex-1 bg-nexible-gold text-black font-bold py-4 rounded-xl hover:bg-nexible-goldHover disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg shadow-lg shadow-nexible-gold/20"
                >
                  Confirm & Send Request
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default IntroRequestFlow;
