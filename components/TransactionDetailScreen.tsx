import React from 'react';
import { IntroRequest } from '../types';
import { USERS } from '../services/mockData';
import { ArrowLeft, User, Building, CheckCircle, Clock, DollarSign, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  request: IntroRequest;
  onBack: () => void;
}

const TransactionDetailScreen: React.FC<Props> = ({ request, onBack }) => {
  const requester = USERS.find(u => u.id === request.requesterId);
  const connector = USERS.find(u => u.id === request.connectorId);

  const getProgressStep = (status: string) => {
    switch (status) {
      case 'Pending': return 1;
      case 'Matching': return 1;
      case 'AwaitingResponse': return 2;
      case 'IntroMade': return 3;
      case 'CommercialConverted': return 4;
      case 'Completed': return 4;
      default: return 1;
    }
  };

  const currentStep = getProgressStep(request.status);

  return (
    <div className="animate-fade-in space-y-8 max-w-5xl mx-auto pb-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-700 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-nexible-gold uppercase tracking-widest border border-nexible-gold/30 px-2 py-0.5 rounded bg-nexible-gold/5">
              Transaction #{request.id.replace('r-', 'TX-')}
            </span>
            <span className="text-xs text-slate-500 font-mono">{new Date(request.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-1">{request.targetName}</h1>
          <div className="flex items-center gap-2 text-xl text-slate-400">
            <Building className="w-5 h-5" />
            <span>{request.targetCompany}</span>
          </div>
        </div>
        <div className="text-right">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wide text-sm">
                <CheckCircle className="w-4 h-4" /> {request.status.replace(/([A-Z])/g, ' $1').trim()}
             </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-nexible-panel border border-slate-700 rounded-xl p-8">
        <h3 className="text-lg font-bold text-white mb-8">Transaction Progress</h3>
        <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-nexible-gold -translate-y-1/2 rounded-full transition-all duration-1000" style={{ width: `${(currentStep - 1) * 33}%` }}></div>

            <div className="relative flex justify-between">
                {[
                    { step: 1, label: 'Request Sent', date: 'Oct 15' },
                    { step: 2, label: 'Connector Assigned', date: 'Oct 16' },
                    { step: 3, label: 'Intro Made', date: 'Oct 20' },
                    { step: 4, label: 'Commercial Convert', date: 'Nov 01' }
                ].map((s) => (
                    <div key={s.step} className="flex flex-col items-center group cursor-default">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 relative z-10 transition-colors duration-500
                            ${s.step <= currentStep ? 'bg-nexible-dark border-nexible-gold text-nexible-gold' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                            {s.step < currentStep ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold text-sm">{s.step}</span>}
                        </div>
                        <div className="mt-4 text-center">
                            <p className={`text-sm font-bold ${s.step <= currentStep ? 'text-white' : 'text-slate-500'}`}>{s.label}</p>
                            {s.step <= currentStep && <p className="text-xs text-slate-500 mt-1">{s.date}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Parties Involved */}
      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Requester</h3>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-full border border-slate-700 overflow-hidden">
                  <img src={requester?.avatar || ''} alt={requester?.name} className="w-full h-full object-cover" />
               </div>
               <div>
                  <p className="text-xl font-bold text-white">{requester?.name}</p>
                  <p className="text-sm text-nexible-muted">{requester?.company}</p>
                  <p className="text-xs text-slate-600 mt-1 uppercase tracking-wide">{requester?.role.replace('_', ' ')}</p>
               </div>
            </div>
            <div className="mt-6 bg-slate-800/50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 font-bold mb-1">THE ASK (CONTEXT)</p>
                <p className="text-sm text-slate-300 italic">"{request.reason}"</p>
            </div>
         </div>

         <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
             <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-slate-800 p-1 rounded-full border border-slate-700 z-10 hidden md:block">
                <ArrowRight className="w-4 h-4 text-slate-500" />
             </div>

            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Connector</h3>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-full border-2 border-nexible-gold p-0.5 overflow-hidden">
                  <img src={connector?.avatar || ''} alt={connector?.name} className="w-full h-full object-cover" />
               </div>
               <div>
                  <p className="text-xl font-bold text-white">{connector?.name}</p>
                  <p className="text-sm text-nexible-muted">{connector?.company}</p>
                  <p className="text-xs text-nexible-gold mt-1 uppercase tracking-wide font-bold">Venture Network</p>
               </div>
            </div>
            <div className="mt-6 flex gap-2">
                 <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">Warm Intro</span>
                 <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">High Trust</span>
            </div>
         </div>
      </div>

      {/* Financials */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8">
         <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-400" /> Financial Outcomes
         </h3>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
               <p className="text-xs text-slate-500 uppercase font-bold mb-1">Final Deal Value</p>
               <p className="text-3xl font-bold text-white">{request.value ? `$${request.value.toLocaleString()}` : 'Pending'}</p>
               <p className="text-xs text-emerald-500 mt-2 flex items-center gap-1">
                 <CheckCircle className="w-3 h-3" /> Confirmed
               </p>
            </div>
            
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
               <p className="text-xs text-slate-500 uppercase font-bold mb-1">Commission Rate</p>
               <p className="text-3xl font-bold text-nexible-gold">{request.commissionRate}%</p>
               <p className="text-xs text-slate-500 mt-2">Agreed on date of request</p>
            </div>

            <div className="p-4 bg-emerald-900/10 rounded-lg border border-emerald-500/20">
               <p className="text-xs text-emerald-500 uppercase font-bold mb-1">Total Commission Due</p>
               <p className="text-3xl font-bold text-emerald-400">
                 {request.value ? `$${(request.value * (request.commissionRate / 100)).toLocaleString()}` : '$0'}
               </p>
               <p className="text-xs text-emerald-500/70 mt-2 font-medium">Payable to Network Connector</p>
            </div>
         </div>

         <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-start gap-4">
             <ShieldCheck className="w-6 h-6 text-slate-500 shrink-0" />
             <p className="text-sm text-slate-400 leading-relaxed">
               This transaction record serves as the immutable ledger for the commercial agreement. The commission is legally binding as per the terms agreed upon request submission within the fund network.
             </p>
         </div>
      </div>
    </div>
  );
};

export default TransactionDetailScreen;