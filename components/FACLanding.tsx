import React from 'react';
import { CheckCircle, Lock, UploadCloud, Zap, ShieldCheck, Globe, Users, TrendingUp } from 'lucide-react';

const FACLanding: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto py-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-nexible-gold/10 text-nexible-gold font-bold text-sm tracking-widest uppercase mb-6 border border-nexible-gold/20">
          Exclusive Ecosystem Access
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexible-gold to-amber-200">Network Alpha Graph</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The Founder Access Circle is a high-performance environment designed for select portfolio members to leverage proprietary network resources and commercial channels.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-nexible-panel border border-slate-700 rounded-2xl p-8 hover:border-slate-500 transition-all group">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <Globe className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Strategic Intros</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Direct access to the fund's LP network and global corporate partners. Every introduction is measured for commercial impact.
          </p>
          <ul className="space-y-3">
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> Measured Outcomes
             </li>
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> Proprietary Access
             </li>
          </ul>
        </div>

        <div className="bg-nexible-panel border border-slate-700 rounded-2xl p-8 hover:border-slate-500 transition-all group">
          <div className="w-12 h-12 bg-nexible-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <TrendingUp className="w-6 h-6 text-nexible-gold" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Runway Extension</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Exclusive access to the Vetted Services Marketplace with pre-negotiated rates from accounting, legal, and engineering partners.
          </p>
           <ul className="space-y-3">
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> 20-30% Savings
             </li>
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> Vetted Quality
             </li>
          </ul>
        </div>

        <div className="bg-nexible-panel border border-slate-700 rounded-2xl p-8 hover:border-slate-500 transition-all group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <Users className="w-6 h-6 text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Alpha Network</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Reciprocal data sharing allows you to contribute to and benefit from the collective network intelligence of the entire fund.
          </p>
           <ul className="space-y-3">
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> Collaborative Deal-flow
             </li>
             <li className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-nexible-gold" /> Shared Incentives
             </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nexible-gold to-transparent opacity-50"></div>
         <ShieldCheck className="w-16 h-16 text-nexible-gold mb-6" />
         <h2 className="text-3xl font-bold text-white mb-4">Enterprise Governance & Access</h2>
         <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Access to the Founder Access Circle is strictly managed by the Fund Administration. Eligibility is determined by portfolio status, network contribution score, and adherence to the commercial success fee framework.
         </p>
         <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all">
               View Access Criteria
            </button>
            <button className="px-8 py-4 bg-nexible-gold text-black font-bold rounded-xl hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/10">
               Contact Fund Admin
            </button>
         </div>
      </div>
      
      <div className="mt-16 bg-slate-900/80 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
               <UploadCloud className="w-8 h-8 text-nexible-gold" />
               Reciprocal Integration
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Upload your network connections to unlock internal ecosystem value. Contribution to the ecosystem increases your proprietary score and priority for inbound introductions.
            </p>
         </div>
         <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Secure Contribution
            </button>
         </div>
      </div>
    </div>
  );
};

export default FACLanding;