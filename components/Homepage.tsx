import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { USERS } from '../services/mockData';
import { User } from '../types';

interface Props {
  onEnterDemo: (user: User) => void;
}

const Homepage: React.FC<Props> = ({ onEnterDemo }) => {
  // Find specific users for the demo buttons
  const vcUser = USERS.find(u => u.role === 'VC_Team');
  const investorUser = USERS.find(u => u.role === 'Investor_Connector' && u.name.includes('Mehdi'));
  const founderUser = USERS.find(u => u.role === 'PortfolioFounder_Connector' && u.name.includes('Mark'));

  return (
    <div className="min-h-screen bg-nexible-dark text-white font-sans selection:bg-nexible-gold selection:text-black animate-fade-in overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-nexible-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-nexible-gold rounded-lg flex items-center justify-center shadow-lg shadow-nexible-gold/20">
                <span className="font-bold text-black text-2xl">N</span>
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-bold text-white tracking-tight">Nexible</span>
                <span className="block text-xs text-nexible-muted font-medium tracking-wide">INVESTIBLE OS</span>
              </div>
           </div>
           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
           </div>
           <button 
             onClick={() => founderUser && onEnterDemo(founderUser)}
             className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold border border-slate-700 transition-all text-sm"
           >
             Log In
           </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-nexible-gold/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-nexible-gold text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
               <Zap className="w-3 h-3 fill-current" /> Live Operating System
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
               Your Network is Your Alpha. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexible-gold to-amber-200">Start Measuring It Today.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               Nexible transforms ad-hoc introductions into measurable revenue and superior fund performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               <button 
                 onClick={() => founderUser && onEnterDemo(founderUser)}
                 className="w-full sm:w-auto px-8 py-4 bg-nexible-gold text-black font-bold rounded-xl hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/20 text-lg flex items-center justify-center gap-2"
               >
                 Request Intro <ArrowRight className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => vcUser && onEnterDemo(vcUser)}
                 className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2"
               >
                 <Globe className="w-5 h-5 text-blue-400" /> See Fund Alpha
               </button>
            </div>
         </div>
      </section>

      {/* Value Prop Grid */}
      <section id="features" className="py-20 bg-slate-900/50 border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
               {/* VC Fund */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For VC Funds</h3>
                  <ul className="space-y-3 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0" /> Quantifiable Alpha for LPs</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0" /> 1,100bps Boost in IRR</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0" /> 10% Lower Failure Rates</li>
                  </ul>
               </div>

               {/* Investors */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-nexible-gold/50 transition-all group relative">
                  <div className="absolute top-0 right-0 bg-nexible-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg">Rewards</div>
                  <div className="w-12 h-12 bg-nexible-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <ShieldCheck className="w-6 h-6 text-nexible-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For Connectors</h3>
                  <ul className="space-y-3 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" /> Earn Carry Access Status</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" /> Direct Commission on Deals</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0" /> Unlock Co-Investment Rights</li>
                  </ul>
               </div>

               {/* Founders */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">For Founders</h3>
                  <ul className="space-y-3 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Instant Warm Intros</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Access Vetted Services</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> Actionable Peer Support</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing / FAC */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Founder Access Circle</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Monetizing the "Silver Medalist" pipeline with premium access.</p>
         </div>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-nexible-panel border border-slate-700 p-8 rounded-2xl">
               <h3 className="text-xl font-bold text-white mb-2">Monthly</h3>
               <div className="text-4xl font-bold text-white mb-6">$499<span className="text-lg text-slate-500 font-normal">/mo</span></div>
               <p className="text-slate-400 mb-6">+ 5% Commission on commercial deals</p>
               <button className="w-full py-3 rounded-lg border border-slate-600 text-white font-bold hover:bg-white hover:text-black transition-all">Select Monthly</button>
            </div>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-nexible-gold p-8 rounded-2xl relative shadow-2xl shadow-nexible-gold/10">
               <div className="absolute top-0 right-0 bg-nexible-gold text-black text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
               <h3 className="text-xl font-bold text-white mb-2">Annual Partner</h3>
               <div className="text-4xl font-bold text-nexible-gold mb-6">$5,490<span className="text-lg text-slate-500 font-normal">/yr</span></div>
               <p className="text-slate-300 mb-6 font-medium">+ 5% Commission & Bespoke Support</p>
               <button className="w-full py-3 rounded-lg bg-nexible-gold text-black font-bold hover:bg-nexible-goldHover transition-all">Select Annual</button>
            </div>
         </div>
      </section>

      {/* Demo Selector */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-800">
         <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Demo Experience</h2>
         <div className="grid md:grid-cols-3 gap-6">
            <button 
               onClick={() => founderUser && onEnterDemo(founderUser)}
               className="group p-6 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all text-left"
            >
               <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-emerald-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Portfolio Founder</h3>
               <p className="text-slate-400 text-sm mb-4">Experience instant intros, marketplace savings, and peer support.</p>
               <span className="text-emerald-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Demo <ArrowRight className="w-4 h-4" /></span>
            </button>

            <button 
               onClick={() => investorUser && onEnterDemo(investorUser)}
               className="group p-6 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-nexible-gold hover:bg-slate-800 transition-all text-left"
            >
               <div className="w-12 h-12 rounded-xl bg-nexible-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-nexible-gold" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Investor / Connector</h3>
               <p className="text-slate-400 text-sm mb-4">View rewards, track commissions, and unlock carry access.</p>
               <span className="text-nexible-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Demo <ArrowRight className="w-4 h-4" /></span>
            </button>

            <button 
               onClick={() => vcUser && onEnterDemo(vcUser)}
               className="group p-6 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all text-left"
            >
               <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">VC Fund Admin</h3>
               <p className="text-slate-400 text-sm mb-4">Monitor fund alpha, deal flow analytics, and network health.</p>
               <span className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Demo <ArrowRight className="w-4 h-4" /></span>
            </button>
         </div>
      </section>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
         <p>© 2024 Nexible Network Operating System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;