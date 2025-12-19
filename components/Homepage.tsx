import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, ShieldCheck, Globe, Database, Network, Briefcase, ShoppingBag } from 'lucide-react';
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
              <a href="#network-engine" className="hover:text-white transition-colors">Network Engine</a>
              <a href="#rewards" className="hover:text-white transition-colors">Rewards</a>
              <a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a>
              <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem Access</a>
           </div>
           <div className="flex items-center gap-4">
              <button 
                onClick={() => vcUser && onEnterDemo(vcUser)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold border border-slate-700 transition-all text-sm"
              >
                Terminal Login
              </button>
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden border-b border-slate-800/50">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-nexible-gold/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-nexible-gold text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
               <Database className="w-3 h-3 fill-current" /> Enterprise Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
               The Operating System for <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexible-gold to-amber-200">Venture Networks.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.2s' }}>
               The Operating System for Venture Networks. Authorized Access Only.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               <button 
                 onClick={() => founderUser && onEnterDemo(founderUser)}
                 className="w-full sm:w-auto px-10 py-4 bg-nexible-gold text-black font-bold rounded-xl hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/20 text-lg flex items-center justify-center gap-2"
               >
                 Launch Portfolio Module <ArrowRight className="w-5 h-5" />
               </button>
               <button 
                 className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-400 font-bold rounded-xl hover:text-white transition-all border border-slate-700 flex items-center justify-center gap-2"
               >
                 <ShieldCheck className="w-5 h-5" /> System Status: Online
               </button>
            </div>
         </div>
      </section>

      {/* (1) Core Networking Engine */}
      <section id="network-engine" className="py-24 bg-slate-900/30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Core Networking Engine</h2>
                <p className="text-slate-400 max-w-2xl">Proprietary protocols for quantifying network alpha and accelerating deal velocity.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Alpha Quantification</h3>
                  <p className="text-slate-400 mb-6">Real-time tracking of network effects and attribution modeling for Fund IV ecosystem participants.</p>
                  <ul className="space-y-4 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> LP Performance Reporting Protocols</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 1,100bps Boost in Unrealized IRR Attribution</li>
                  </ul>
               </div>
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Network className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Introduction Routing</h3>
                  <p className="text-slate-400 mb-6">Automated matching engine connecting portfolio requirements to verified network nodes.</p>
                  <ul className="space-y-4 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Frictionless Commercial Pathfinding</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Success-Fee Framework Automation</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* (2) Investor Rewards Protocol */}
      <section id="rewards" className="py-24 border-b border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-nexible-dark border border-nexible-gold/20 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <div className="w-16 h-16 bg-nexible-gold/10 rounded-2xl flex items-center justify-center mb-6">
                     <ShieldCheck className="w-8 h-8 text-nexible-gold" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">Investor Rewards Protocol</h2>
                  <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                     The Nexible Rewards Protocol incentivizes active ecosystem participation by allocating carry access and commission distribution based on verifiable value creation.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                        <p className="text-nexible-gold font-bold mb-1">Carry Tiering</p>
                        <p className="text-sm text-slate-400">Dynamic allocation of co-investment rights.</p>
                     </div>
                     <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                        <p className="text-nexible-gold font-bold mb-1">Fee Distribution</p>
                        <p className="text-sm text-slate-400">Automated ledger for connector success fees.</p>
                     </div>
                  </div>
               </div>
               <div className="flex-1 w-full max-w-md">
                  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Protocol Preview</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     </div>
                     <div className="space-y-4">
                        <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                           <div className="h-full bg-nexible-gold w-3/4"></div>
                        </div>
                        <p className="text-xs text-nexible-gold font-mono">GOLD TIER ACCESS ACTIVE</p>
                        <div className="pt-4 border-t border-slate-700 space-y-2">
                           <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Accrued Carry Value</span>
                              <span className="text-white font-bold">$250,000</span>
                           </div>
                           <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Network Alpha Score</span>
                              <span className="text-white font-bold">1,420 Pts</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* (3) Vetted Services Marketplace */}
      <section id="marketplace" className="py-24 bg-slate-900/10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Vetted Services Marketplace</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Preferred partner ecosystem providing infrastructure subsidies to portfolio members.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Accounting & CFO", icon: Briefcase, desc: "Standard Ledger fractional CFO and R&D tax protocols." },
                  { title: "Legal & IP", icon: ShieldCheck, desc: "Vetted capital raising and IP protection frameworks." },
                  { title: "Technology", icon: Database, desc: "Fractional engineering and architectural advisory services." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-nexible-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-slate-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
            </div>
            <div className="mt-12 text-center">
               <button 
                onClick={() => investorUser && onEnterDemo(investorUser)}
                className="inline-flex items-center gap-2 text-nexible-gold font-bold hover:text-white transition-colors"
               >
                 Explore Marketplace Catalog <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </section>

      {/* (4) Exclusive Ecosystem Access (FAC) */}
      <section id="ecosystem" className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 bg-blue-500/5 rounded-bl-full -mr-12 -mt-12 pointer-events-none"></div>
            
            <div className="max-w-3xl relative z-10">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">Information Node</span>
                <h2 className="text-4xl font-bold text-white mb-6">Exclusive Ecosystem Access</h2>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                   The Founder Access Circle (FAC) is a restricted-access program for high-performance portfolio members. It provides the governance framework for secondary network effects, offering deep integration into the Investible Fund IV alpha graph.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                         <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                         <p className="text-white font-bold">Global LP Graph</p>
                         <p className="text-sm text-slate-500">Unrestricted visibility into corporate and strategic partner nodes.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                         <ShoppingBag className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                         <p className="text-white font-bold">Preferred GTM Access</p>
                         <p className="text-sm text-slate-500">Priority commercial pathfinding within the Investible network.</p>
                      </div>
                   </div>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <p className="text-sm text-slate-400">
                        <strong className="text-white">Authorized Governance:</strong> Access is provisioned by the Fund Administrator based on network contribution metrics. No self-subscription available.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* Module Navigation */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-800">
         <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">System Modules</h2>
            <p className="text-slate-500">Authorized personnel only.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            <button onClick={() => founderUser && onEnterDemo(founderUser)} className="p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-emerald-500 transition-all text-left group">
               <Zap className="w-6 h-6 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-2">Founder Module</h3>
               <p className="text-slate-400 text-sm">GTM Acceleration & Marketplace.</p>
            </button>
            <button onClick={() => investorUser && onEnterDemo(investorUser)} className="p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-nexible-gold transition-all text-left group">
               <ShieldCheck className="w-6 h-6 text-nexible-gold mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-2">Venture Module</h3>
               <p className="text-slate-400 text-sm">Rewards & Carry Tracking.</p>
            </button>
            <button onClick={() => vcUser && onEnterDemo(vcUser)} className="p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-blue-500 transition-all text-left group">
               <TrendingUp className="w-6 h-6 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold text-white mb-2">Admin Module</h3>
               <p className="text-slate-400 text-sm">Ecosystem Alpha & Governance.</p>
            </button>
         </div>
      </section>

      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
         <p>© 2024 Nexible Network Operating System. Enterprise Proprietary Asset.</p>
      </footer>
    </div>
  );
};

export default Homepage;