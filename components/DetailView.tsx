import React from 'react';
import { DetailViewType, IntroRequest } from '../types';
import { USERS } from '../services/mockData';
import { ArrowLeft, User, DollarSign, Clock, CheckCircle, TrendingUp, ChevronRight, Sparkles, AlertTriangle } from 'lucide-react';

interface Props {
  viewType: DetailViewType;
  onBack: () => void;
  requests: IntroRequest[];
  onSelectRequest: (req: IntroRequest) => void;
}

const DetailView: React.FC<Props> = ({ viewType, onBack, requests, onSelectRequest }) => {
  const getTitle = () => {
    switch(viewType) {
      case 'network_growth': return 'Network Growth Analytics';
      case 'active_intros': return 'Active Introductions';
      case 'commercial_value': return 'Commercial Value Realization';
      case 'pending_requests': return 'Pending Requests';
      case 'savings': return 'Marketplace Savings';
      case 'matches_found': return 'Match History';
      default: return 'Details';
    }
  };

  const getContent = () => {
    if (viewType === 'matches_found') {
        return (
            <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-nexible-panel border border-slate-700 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600">
                                <User className="w-6 h-6 text-slate-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Top Match Identified</h4>
                                <p className="text-sm text-nexible-muted">Found via Network Team routing.</p>
                            </div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-sm">99% Match</span>
                    </div>
                ))}
            </div>
        )
    }

    if (viewType === 'savings') {
        return (
            <div className="grid gap-4">
                <div className="bg-nexible-panel border border-slate-700 p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-white text-lg">Cloud Infrastructure Credits</h4>
                        <span className="text-emerald-400 font-bold">$10,000</span>
                    </div>
                    <p className="text-sm text-slate-400">Applied via Ecosystem Perks Program.</p>
                </div>
                <div className="bg-nexible-panel border border-slate-700 p-6 rounded-xl">
                     <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-white text-lg">Legal Audit</h4>
                        <span className="text-emerald-400 font-bold">$2,500</span>
                    </div>
                    <p className="text-sm text-slate-400">Saved on IP review with vetted partners.</p>
                </div>
            </div>
        )
    }

    if (viewType === 'commercial_value') {
        const ledgerItems = [
             { id: 204, name: "HealthTech Inc (FAC)", category: "Executive Hire", connector: "Network Advisor", value: "+$150,000", date: "Oct 2023" },
             { id: 205, name: "Stealth AI (FAC)", category: "IP Strategy Partnership", connector: "Venture Partner", value: "+$85,000", date: "Nov 2023" },
             { id: 206, name: "GreenEnergy (FAC)", category: "Series A Advisory", connector: "Fund Member", value: "+$320,000", date: "Dec 2023" },
             { id: 207, name: "FinFlow Solutions (FAC)", category: "Compliance Audit", connector: "Strategic Partner", value: "+$45,000", date: "Jan 2024" }
        ];

        return (
            <div className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <p className="text-slate-500 text-xs uppercase">Total Value</p>
                        <p className="text-2xl font-bold text-emerald-500">$6,800,000</p>
                    </div>
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <p className="text-slate-500 text-xs uppercase">Top Deal</p>
                        <p className="text-2xl font-bold text-white">$1,250,000</p>
                    </div>
                     <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                        <p className="text-slate-500 text-xs uppercase">Avg. Commission</p>
                        <p className="text-2xl font-bold text-nexible-gold">5.0%</p>
                    </div>
                 </div>

                 <h3 className="text-lg font-bold text-white mb-2">Deal Ledger (Recent Commercial Outcomes)</h3>
                 <div className="space-y-2">
                    {ledgerItems.map(item => (
                        <div key={item.id} className="bg-nexible-panel border border-slate-700 p-4 rounded-xl flex justify-between items-center group hover:border-nexible-gold/30 transition-all">
                            <div>
                                <div className="flex items-center gap-2">
                                   <p className="font-bold text-white">{item.name}</p>
                                   <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-nexible-gold font-bold border border-nexible-gold/20">FAC MEMBER</span>
                                </div>
                                <p className="text-xs text-slate-500">{item.category} • Facilitated by <span className="text-slate-300">{item.connector}</span></p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-emerald-400 text-lg">{item.value}</p>
                                <p className="text-xs text-slate-500">Realized {item.date}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        )
    }

    return (
      <div className="space-y-3">
        {requests.map(req => {
          const connector = USERS.find(u => u.id === req.connectorId);
          const requester = USERS.find(u => u.id === req.requesterId);
          const isCommercial = req.status === 'CommercialConverted';
          const isZeroFee = req.commissionRate === 0;

          return (
            <button 
                key={req.id} 
                onClick={() => onSelectRequest(req)}
                className="w-full text-left bg-nexible-panel border border-slate-700 p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-nexible-gold/50 transition-all relative overflow-hidden"
            >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isCommercial ? 'bg-emerald-500' : 'bg-slate-700 group-hover:bg-nexible-gold'}`}></div>

                <div className="flex-1 pl-2">
                    <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5 bg-slate-800/50 px-2 py-1 rounded-full border border-slate-700">
                           <img src={requester?.avatar} className="w-4 h-4 rounded-full" alt="" />
                           <span className="font-medium text-slate-300">{requester?.name}</span>
                        </div>
                        <span className="text-slate-600">via</span>
                        <div className="flex items-center gap-1.5 bg-slate-800/50 px-2 py-1 rounded-full border border-slate-700">
                           <img src={connector?.avatar} className="w-4 h-4 rounded-full" alt="" />
                           <span className="font-medium text-slate-300">{connector?.name}</span>
                        </div>
                    </div>

                    <h4 className="font-bold text-white text-lg group-hover:text-nexible-gold transition-colors">{req.targetName}</h4>
                    <p className="text-sm text-nexible-muted">{req.targetCompany}</p>
                </div>

                <div className="flex items-center gap-6 pr-8">
                    {isZeroFee ? (
                        <div className="text-right">
                            <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20 mb-1">
                                <Sparkles className="w-3 h-3" /> INTERNAL (0% FEE)
                            </div>
                            <p className="text-xs text-slate-500">Portfolio Ecosystem</p>
                        </div>
                    ) : (
                        <div className="text-right">
                             <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/20 mb-1">
                                <AlertTriangle className="w-3 h-3" /> {req.commissionRate}% COMM
                            </div>
                            <p className="text-xs text-slate-500">Liability Active</p>
                        </div>
                    )}
                    
                    <div className="text-right min-w-[100px]">
                         {req.value ? (
                             <>
                                <p className="text-xs text-slate-500 uppercase font-bold">Deal Value</p>
                                <p className="font-bold text-white text-lg">${req.value.toLocaleString()}</p>
                             </>
                         ) : (
                             <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide
                                ${req.status === 'IntroMade' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                                'bg-slate-700 text-slate-400 border border-slate-600'}`}>
                                {req.status.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                         )}
                    </div>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 text-nexible-gold" />
                </div>
            </button>
          );
        })}
        {requests.length === 0 && <p className="text-slate-400 text-center py-10">No records found for this category.</p>}
      </div>
    );
  };

  return (
    <div className="animate-fade-in space-y-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
      </button>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{getTitle()}</h2>
        <p className="text-nexible-muted">Detailed breakdown of network activity and value generation.</p>
      </div>

      <div className="bg-slate-900/50 rounded-xl p-1">
          {getContent()}
      </div>
    </div>
  );
};

export default DetailView;