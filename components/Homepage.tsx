import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, ShieldCheck, Globe, Database, Network, Briefcase } from 'lucide-react';
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
              <a href="#features" className="hover:text-white transition-colors">OS Capabilities</a>
              <a href="#ecosystem" className="hover:text-white transition-colors">Ecosystem Access</a>
           </div>
           <button 
             onClick={() => founderUser && onEnterDemo(founderUser)}
             className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold border border-slate-700 transition-all text-sm"
           >
             Terminal Login
           </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden border-b border-slate-800/50">
         {/* Background Elements */}
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
               Authorized Access Only. Quantify network alpha, manage proprietary deal flow, and unlock commercial value from your most valuable asset.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               <button 
                 onClick={() => vcUser && onEnterDemo(vcUser)}
                 className="w-full sm:w-auto px-10 py-4 bg-nexible-gold text-black font-bold rounded-xl hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/20 text-lg flex items-center justify-center gap-2"
               >
                 Enter Workspace <ArrowRight className="w-5 h-5" />
               </button>
               <button 
                 className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-400 font-bold rounded-xl hover:text-white transition-all border border-slate-700 flex items-center justify-center gap-2"
               >
                 <ShieldCheck className="w-5 h-5" /> System Status: Online
               </button>
            </div>
         </div>
      </section>

      {/* OS Capabilities Grid */}
      <section id="features" className="py-24 bg-slate-900/30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Core Operating Capabilities</h2>
                <p className="text-slate-500 max-w-xl mx-auto">Proprietary protocols designed for high-performance venture ecosystems.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
               {/* VC Fund */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fund Administration</h3>
                  <ul className="space-y-4 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Quantifiable Alpha for LP Reporting</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 1,100bps Boost in Unrealized IRR</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Predictive Performance Modeling</li>
                  </ul>
               </div>

               {/* Investors */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-nexible-gold/50 transition-all group relative">
                  <div className="w-12 h-12 bg-nexible-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <ShieldCheck className="w-6 h-6 text-nexible-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Rewards Protocol</h3>
                  <ul className="space-y-4 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0 mt-0.5" /> Carry Access Tiering Engine</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0 mt-0.5" /> Automated Commission Distribution</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nexible-gold shrink-0 mt-0.5" /> Co-Investment Rights Management</li>
                  </ul>
               </div>

               {/* Founders */}
               <div className="bg-nexible-dark p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Network className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Value Creation Engine</h3>
                  <ul className="space-y-4 text-slate-400">
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Frictionless Commercial Intros</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Vetted Vendor Service Graph</li>
                     <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Peer-to-Peer Knowledge Ledger</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Ecosystem Info Section */}
      <section id="ecosystem" className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-gradient-to-br from-slate-900 to-nexible-dark border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 bg-nexible-gold/5 rounded-bl-full -mr-12 -mt-12 pointer-events-none"></div>
            
            <div className="max-w-3xl relative z-10">
                <span className="text-nexible-gold font-bold text-sm tracking-widest uppercase mb-4 block">Ecosystem Status</span>
                <h2 className="text-4xl font-bold text-white mb-6">Exclusive Ecosystem Access</h2>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                   The Founder Access Circle (FAC) is a restricted-access program for elite portfolio members and vetted strategic partners. Membership provides the infrastructure to monetize secondary network effects and accelerate commercial roadmaps through the Investible OS.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-nexible-gold" />
                        </div>
                        <span className="text-white font-medium">Bespoke GTM Strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                            <Network className="w-5 h-5 text-nexible-gold" />
                        </div>
                        <span className="text-white font-medium">Full Graph Visibility</span>
                    </div>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <p className="text-sm text-slate-400">
                        <strong className="text-white">Note:</strong> Membership is by invitation only for Silver Medalist portfolio founders and strategic connectors. Access is provisioned based on network contribution and proprietary score metrics.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* Demo Selector */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-800">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">Explore Persona Modules</h2>
                <p className="text-slate-400">Select a secure workspace to experience the Nexible environment.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE SESSIONS: 1,422
            </div>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <button 
               onClick={() => founderUser && onEnterDemo(founderUser)}
               className="group p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all text-left relative overflow-hidden shadow-2xl"
            >
               <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-emerald-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Portfolio Founder</h3>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Execute warm introductions, leverage marketplace subsidies, and collaborate with peer nodes.</p>
               <span className="text-emerald-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Module <ArrowRight className="w-4 h-4" /></span>
            </button>

            <button 
               onClick={() => investorUser && onEnterDemo(investorUser)}
               className="group p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-nexible-gold hover:bg-slate-800 transition-all text-left relative overflow-hidden shadow-2xl"
            >
               <div className="w-12 h-12 rounded-xl bg-nexible-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-nexible-gold" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Venture Partner</h3>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Monitor network capital, track attributed commissions, and manage co-investment allocations.</p>
               <span className="text-nexible-gold font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Module <ArrowRight className="w-4 h-4" /></span>
            </button>

            <button 
               onClick={() => vcUser && onEnterDemo(vcUser)}
               className="group p-8 rounded-2xl bg-nexible-panel border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all text-left relative overflow-hidden shadow-2xl"
            >
               <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Fund Administrator</h3>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Command-level visibility into fund alpha, deal-flow velocity, and ecosystem network health.</p>
               <span className="text-blue-500 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Launch Module <ArrowRight className="w-4 h-4" /></span>
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