
import React from 'react';
import { CheckCircle, Lock, UploadCloud, Zap } from 'lucide-react';

const FACLanding: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto py-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-nexible-gold/10 text-nexible-gold font-bold text-sm tracking-widest uppercase mb-6 border border-nexible-gold/20">
          Founder Access Circle
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexible-gold to-amber-200">Top 1% Network</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Monetize your "Silver Medalist" status. Join the exclusive ecosystem to access commercial intros, vetted vendors, and future deal flow from Investible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-20">
        {/* Monthly Plan */}
        <div className="bg-nexible-panel border border-slate-700 rounded-2xl p-8 relative overflow-hidden hover:border-slate-500 transition-all group">
          <h3 className="text-2xl font-bold text-white mb-2">Monthly Member</h3>
          <div className="flex items-baseline gap-1 mb-6">
             <span className="text-4xl font-bold text-white group-hover:text-nexible-gold transition-colors">$499</span>
             <span className="text-slate-400">/mo</span>
          </div>
          <div className="h-px w-full bg-slate-700 mb-6"></div>
          <ul className="space-y-4 mb-8">
             <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Unlimited Intro Requests (5% success fee)</span>
             </li>
             <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Access to Vetted Vendor Marketplace</span>
             </li>
             <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Basic Network Analytics</span>
             </li>
          </ul>
          <button className="w-full py-4 rounded-xl border border-slate-600 text-white font-bold hover:bg-white hover:text-black transition-all">
            Start Monthly Access
          </button>
        </div>

        {/* Annual Plan */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-nexible-gold rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-nexible-gold/10 transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-0 right-0 bg-nexible-gold text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wide">
             RECOMMENDED
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Annual Partner</h3>
          <div className="flex items-baseline gap-1 mb-2">
             <span className="text-5xl font-bold text-nexible-gold">$5,490</span>
             <span className="text-slate-400">/yr</span>
          </div>
          <p className="text-sm text-emerald-400 mb-6 font-bold flex items-center gap-1">
            <Zap className="w-3 h-3 fill-current" /> Save 10% vs Monthly
          </p>
          <div className="h-px w-full bg-slate-700 mb-6"></div>
          <ul className="space-y-4 mb-8">
             <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Everything in Monthly</span>
             </li>
             <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Bespoke GTM Strategy Session</span>
             </li>
             <li className="flex items-start gap-3 text-white font-medium">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Tailored Tech Stack Review</span>
             </li>
             <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" />
                <span>Feedback Analysis (Rejection Reasons)</span>
             </li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-nexible-gold text-black font-bold hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/20 text-lg">
            Join Annual Program
          </button>
        </div>
      </div>
      
      {/* Network Integration Feature */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
               <UploadCloud className="w-8 h-8 text-nexible-gold" />
               Contribute to the Ecosystem
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Upload your LinkedIn Connections (CSV) to unlock reciprocal value. Your network becomes part of the matching engine, earning you points and future commission opportunities when your contacts are matched.
            </p>
         </div>
         <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Secure Upload CSV
            </button>
         </div>
      </div>
    </div>
  );
};

export default FACLanding;
