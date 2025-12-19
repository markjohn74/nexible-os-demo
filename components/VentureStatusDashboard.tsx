import React from 'react';
import { User, IntroRequest } from '../types';
import { ArrowLeft, Award, TrendingUp, DollarSign, Lock, Unlock, ChevronRight, Crown, Star } from 'lucide-react';
import { USERS } from '../services/mockData';

interface Props {
  user: User;
  requests: IntroRequest[];
  onBack: () => void;
  onSelectRequest: (req: IntroRequest) => void;
}

const VentureStatusDashboard: React.FC<Props> = ({ user, requests, onBack, onSelectRequest }) => {
  const myDeals = requests.filter(r => r.connectorId === user.id);
  
  const completedDeals = myDeals.filter(r => r.status === 'CommercialConverted').length;
  
  const totalCommissionEarned = myDeals.reduce((acc, curr) => {
    if (curr.status !== 'CommercialConverted' || !curr.value) return acc;
    const rate = curr.connectorCommissionRate !== undefined ? curr.connectorCommissionRate : (curr.commissionRate === 0 ? 0 : 2.5);
    return acc + (curr.value * (rate / 100));
  }, 0);

  const estCarryValue = 250000; 
  const pointsToNextTier = 500;
  const currentPoints = user.points;
  const nextTierPoints = currentPoints + pointsToNextTier;
  const progressPercent = Math.min((currentPoints / nextTierPoints) * 100, 100);

  return (
    <div className="animate-fade-in space-y-8 pb-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
      </button>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-8">
        <div>
           <div className="flex items-center gap-2 mb-2">
             <span className="bg-nexible-gold/10 text-nexible-gold border border-nexible-gold/20 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
               <Crown className="w-3 h-3" /> Venture Partner Track
             </span>
           </div>
           <h1 className="text-4xl font-bold text-white mb-2">Venture Status & Carry Access</h1>
           <p className="text-nexible-muted text-lg max-w-2xl">
             Track your accrued Alpha Capital and unlock privileged access to the fund's Co-Investment Carry Pool.
           </p>
        </div>
        <div className="text-right">
           <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Current Status</p>
           <div className="text-3xl font-bold text-white flex items-center justify-end gap-2">
              <Award className="w-8 h-8 text-nexible-gold" />
              {user.tier} Tier
           </div>
           <p className="text-emerald-400 text-sm font-bold mt-1">Co-Investment Pool Access Active</p>
        </div>
      </div>

      {/* Financials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
               <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <DollarSign className="w-8 h-8 text-emerald-500" />
               </div>
               <span className="text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">+15% vs Last Qtr</span>
            </div>
            <p className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-1">Total Commission Earned</p>
            <h3 className="text-4xl font-bold text-white mb-2">${totalCommissionEarned.toLocaleString()}</h3>
            <p className="text-slate-500 text-sm">Realized cash returns from network introductions.</p>
         </div>

         <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-nexible-gold/30 rounded-xl p-8 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 bg-nexible-gold/5 rounded-bl-full -mr-6 -mt-6 group-hover:bg-nexible-gold/10 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-6 relative z-10">
               <div className="p-3 bg-nexible-gold/10 rounded-lg border border-nexible-gold/20">
                  <TrendingUp className="w-8 h-8 text-nexible-gold" />
               </div>
               <span className="text-xs text-nexible-gold font-bold bg-nexible-gold/10 px-2 py-1 rounded flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Vesting
               </span>
            </div>
            <p className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-1 relative z-10">Est. Future Carry Value</p>
            <h3 className="text-4xl font-bold text-white mb-2 relative z-10">${estCarryValue.toLocaleString()}</h3>
            <p className="text-slate-500 text-sm relative z-10">Projected value based on Gold Tier allocation in current fund.</p>
         </div>
      </div>

      {/* Next Tier Incentive */}
      <div className="bg-nexible-panel border border-slate-700 rounded-xl p-8">
         <div className="flex justify-between items-end mb-4">
            <div>
               <h3 className="text-xl font-bold text-white mb-1">Path to Platinum Status</h3>
               <p className="text-slate-400 text-sm">Unlock priority allocations and increased carry percentage.</p>
            </div>
            <div className="text-right">
               <span className="text-2xl font-bold text-white">{currentPoints}</span>
               <span className="text-slate-500 mx-1">/</span>
               <span className="text-slate-500 font-bold">{nextTierPoints} Alpha Capital</span>
            </div>
         </div>
         
         <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-6 border border-slate-700">
            <div 
              className="h-full bg-gradient-to-r from-nexible-gold to-amber-300 transition-all duration-1000 shadow-[0_0_15px_#f59e0b]" 
              style={{ width: `${progressPercent}%` }}
            ></div>
         </div>

         <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
               <CheckCircleIcon checked={true} />
               <span className="line-through decoration-slate-500 text-slate-500">Gold Tier Access</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white bg-slate-800/80 p-3 rounded-lg border border-nexible-gold/30 shadow-sm">
               <div className="w-5 h-5 rounded-full bg-nexible-gold/20 flex items-center justify-center border border-nexible-gold/50">
                  <Star className="w-3 h-3 text-nexible-gold fill-current" />
               </div>
               <span className="font-bold">Platinum Carry Multiplier (1.5x)</span>
            </div>
             <div className="flex items-center gap-3 text-sm text-slate-400 bg-slate-800/30 p-3 rounded-lg border border-slate-800">
               <Lock className="w-4 h-4 text-slate-500" />
               <span>Partner Track Nomination</span>
            </div>
         </div>
      </div>

      {/* Deal Flow Attribution */}
      <div>
         <h3 className="text-xl font-bold text-white mb-6">Attributed Deal Flow</h3>
         <div className="bg-nexible-panel border border-slate-700 rounded-xl overflow-hidden">
            <table className="w-full text-left">
               <thead className="bg-slate-900/50 text-xs uppercase text-nexible-muted font-bold tracking-wider">
                  <tr>
                     <th className="px-6 py-4">Requester</th>
                     <th className="px-6 py-4">Target Company</th>
                     <th className="px-6 py-4">Value Created</th>
                     <th className="px-6 py-4">Status</th>
                     <th className="px-6 py-4"></th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-700/50">
                  {myDeals.map((req) => {
                     const requester = USERS.find(u => u.id === req.requesterId);
                     return (
                        <tr 
                           key={req.id} 
                           onClick={() => onSelectRequest(req)}
                           className="hover:bg-slate-700/30 transition-colors cursor-pointer group"
                        >
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                 <img src={requester?.avatar} className="w-8 h-8 rounded-full bg-slate-700" alt="" />
                                 <div>
                                    <p className="font-bold text-white">{requester?.name}</p>
                                    <p className="text-xs text-nexible-muted">{requester?.role.replace('_', ' ')}</p>
                                 </div>
                              </div>
                           </td>
                           <td className="px-6 py-4">
                              <p className="text-white font-medium">{req.targetCompany}</p>
                              <p className="text-xs text-slate-500">Target: {req.targetName}</p>
                           </td>
                           <td className="px-6 py-4">
                              {req.value ? (
                                 <span className="text-emerald-400 font-bold font-mono">+${req.value.toLocaleString()}</span>
                              ) : (
                                 <span className="text-slate-500 font-mono">-</span>
                              )}
                           </td>
                           <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide
                                 ${req.status === 'CommercialConverted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                                   'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                                 {req.status === 'CommercialConverted' ? 'Value Realized' : 'In Progress'}
                              </span>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-nexible-gold transition-colors" />
                           </td>
                        </tr>
                     );
                  })}
                  {myDeals.length === 0 && (
                     <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No attributed deals yet. Start connecting!</td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>

    </div>
  );
};

const CheckCircleIcon = ({ checked }: { checked: boolean }) => (
    <div className={`w-5 h-5 rounded-full flex items-center justify-center border 
       ${checked ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' : 'border-slate-600 bg-slate-800'}`}>
       {checked && <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />}
    </div>
);

export default VentureStatusDashboard;