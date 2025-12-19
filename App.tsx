import React, { useState } from 'react';
import { USERS, MOCK_REQUESTS } from './services/mockData';
import { User, IntroRequest, DetailViewType } from './types';
import Dashboard from './components/Dashboard';
import IntroRequestFlow from './components/IntroRequestFlow';
import Marketplace from './components/Marketplace';
import FACLanding from './components/FACLanding';
import DetailView from './components/DetailView';
import VentureStatusDashboard from './components/VentureStatusDashboard';
import UploadContactsScreen from './components/UploadContactsScreen';
import TransactionDetailScreen from './components/TransactionDetailScreen';
import Homepage from './components/Homepage';
import { LayoutDashboard, Network, ShoppingBag, Settings, Plus, ChevronDown, UserCircle, Globe } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [showLanding, setShowLanding] = useState(true);
  const [currentUser, setCurrentUser] = useState<User>(USERS.find(u => u.name.includes('Mark John')) || USERS[0]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'marketplace' | 'fac' | 'upload_contacts'>('dashboard');
  const [detailView, setDetailView] = useState<DetailViewType>(null);
  const [requests, setRequests] = useState<IntroRequest[]>(MOCK_REQUESTS);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<IntroRequest | null>(null);

  // Handlers
  const handleEnterDemo = (user: User) => {
    setCurrentUser(user);
    setShowLanding(false);
    setActiveTab('dashboard');
    setDetailView(null);
    setSelectedRequest(null);
    window.scrollTo(0,0);
  };

  const handleRoleSwitch = (user: User) => {
    setCurrentUser(user);
    setActiveTab('dashboard'); 
    setDetailView(null);
    setSelectedRequest(null);
    setShowRoleMenu(false);
  };

  const handleNewRequest = (req: IntroRequest) => {
    setRequests([req, ...requests]);
  };

  const handleNavigateToDashboard = () => {
    setActiveTab('dashboard');
    setDetailView(null);
    setSelectedRequest(null);
  };

  const getRoleStyles = (role: string) => {
    switch(role) {
      case 'VC_Team': 
        return {
           container: 'border-blue-500/40 bg-blue-500/10',
           text: 'text-blue-400',
           dot: 'bg-blue-400'
        };
      case 'Investor_Connector': 
        return {
           container: 'border-red-500/40 bg-red-500/10',
           text: 'text-red-400',
           dot: 'bg-red-400'
        };
      case 'PortfolioFounder_Connector': 
        return {
           container: 'border-green-500/40 bg-green-500/10',
           text: 'text-green-400',
           dot: 'bg-green-400'
        };
      case 'AccessFounder': 
        return {
           container: 'border-orange-500/40 bg-orange-500/10',
           text: 'text-orange-400',
           dot: 'bg-orange-400'
        };
      default: 
        return {
           container: 'border-slate-700 bg-slate-800',
           text: 'text-slate-400',
           dot: 'bg-slate-400'
        };
    }
  };

  const Sidebar = () => (
    <div className="w-64 bg-nexible-dark border-r border-slate-800 flex flex-col h-screen fixed left-0 top-0 z-10">
      <div className="p-6">
        <button 
          onClick={() => setShowLanding(true)}
          className="flex items-center gap-3 mb-8 w-full text-left group transition-transform hover:scale-105"
        >
           <div className="w-10 h-10 bg-nexible-gold rounded-lg flex items-center justify-center shadow-lg shadow-nexible-gold/20 group-hover:shadow-nexible-gold/40 transition-shadow">
             <span className="font-bold text-black text-2xl">N</span>
           </div>
           <div className="leading-tight">
             <span className="block text-lg font-bold text-white tracking-tight group-hover:text-nexible-gold transition-colors">Nexible</span>
             <span className="block text-xs text-nexible-muted font-medium tracking-wide">NETWORK OS</span>
           </div>
        </button>
        
        <nav className="space-y-2">
          <button 
            onClick={handleNavigateToDashboard}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'dashboard' ? 'bg-nexible-panel text-white border border-slate-700 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> 
            {currentUser.role === 'VC_Team' ? 'Fund Overview' : 'Dashboard'}
          </button>
          
          {(currentUser.role === 'PortfolioFounder_Connector' || currentUser.role === 'AccessFounder' || currentUser.role === 'VC_Team') && (
            <button 
              onClick={() => { setActiveTab('marketplace'); setDetailView(null); setSelectedRequest(null); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'marketplace' ? 'bg-nexible-panel text-white border border-slate-700 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
              <ShoppingBag className="w-5 h-5" /> Marketplace
            </button>
          )}

          {currentUser.role !== 'AccessFounder' && (
             <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all font-medium">
               <Network className="w-5 h-5" /> Network Graph
             </button>
          )}

          {currentUser.role === 'AccessFounder' && (
             <button 
               onClick={() => { setActiveTab('fac'); setDetailView(null); setSelectedRequest(null); }}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === 'fac' ? 'bg-nexible-panel text-white border border-slate-700 shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
             >
               <Settings className="w-5 h-5" /> Subscription
             </button>
          )}
        </nav>

        {currentUser.role === 'VC_Team' && (
          <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800">
             <div className="flex items-center gap-2 mb-2 text-nexible-gold text-xs font-bold uppercase tracking-wider">
               <Globe className="w-3 h-3" /> Fund Context
             </div>
             <p className="text-white font-bold text-sm">Portfolio Fund</p>
             <p className="text-slate-500 text-xs mt-1">Admin: {currentUser.name}</p>
          </div>
        )}
      </div>

      <div className="mt-auto p-6 border-t border-slate-800">
        <div className="relative">
          <button 
             onClick={() => setShowRoleMenu(!showRoleMenu)}
             className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-800 transition-colors text-left group"
          >
            <img src={currentUser.avatar} alt="User" className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600 group-hover:border-nexible-gold transition-colors object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{currentUser.name}</p>
              <p className="text-xs text-nexible-muted truncate uppercase tracking-wider">{currentUser.role.replace('_', ' ')}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </button>

          {showRoleMenu && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 p-2 space-y-1">
              <div className="px-2 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 mb-1">
                 <UserCircle className="w-3 h-3" /> Select Persona
              </div>
              <div className="max-h-80 overflow-y-auto pr-1">
                {USERS.map(u => {
                   const isActive = u.id === currentUser.id;
                   const styles = getRoleStyles(u.role);
                   
                   return (
                      <button 
                        key={u.id}
                        onClick={() => handleRoleSwitch(u)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-all border flex items-center gap-3 mb-1 group
                          ${isActive 
                             ? `${styles.container} ring-1 ring-inset ${styles.container.split(' ')[0].replace('border-', 'ring-')}`
                             : 'border-transparent hover:bg-slate-800 text-slate-400'
                          }
                        `}
                      >
                         <div className={`w-2 h-2 rounded-full ${styles.dot} shadow-[0_0_8px_CurrentColor]`}></div>
                         <div className="flex-1 min-w-0">
                            <span className={`block font-bold truncate ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{u.name}</span>
                            <span className={`text-[10px] uppercase tracking-wider truncate ${isActive ? styles.text : 'text-slate-500'}`}>
                                {u.role === 'VC_Team' ? 'VC Team' : 
                                 u.role === 'Investor_Connector' ? 'Investor' : 
                                 u.role === 'PortfolioFounder_Connector' ? 'Founder' : 'Access (FAC)'}
                            </span>
                         </div>
                      </button>
                   );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (showLanding) {
    return <Homepage onEnterDemo={handleEnterDemo} />;
  }

  return (
    <div className="min-h-screen bg-nexible-dark text-slate-50 font-sans selection:bg-nexible-gold selection:text-black">
      <Sidebar />
      
      <main className="pl-64 transition-all duration-300">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-nexible-dark/90 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex justify-between items-center">
           <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400">
                <span className="text-white">Network Platform</span>
                <span className="text-slate-600">/</span>
                <span>Operating System</span>
                <span className="text-slate-600">/</span>
                <span className="text-nexible-gold">{currentUser.company}</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowRequestModal(true)}
                className="bg-nexible-gold hover:bg-nexible-goldHover text-black font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-nexible-gold/10 hover:shadow-nexible-gold/20 transition-all flex items-center gap-2 transform active:scale-95"
              >
                <Plus className="w-4 h-4" /> Request Intro
              </button>
           </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && !detailView && !selectedRequest && (
            <Dashboard 
              user={currentUser} 
              requests={requests} 
              onNavigate={setDetailView}
              onSwitchTab={setActiveTab}
              onSelectRequest={setSelectedRequest}
            />
          )}
          {activeTab === 'dashboard' && detailView === 'venture_status' && !selectedRequest && (
            <VentureStatusDashboard 
              user={currentUser} 
              requests={requests}
              onBack={() => setDetailView(null)}
              onSelectRequest={setSelectedRequest}
            />
          )}
          {activeTab === 'dashboard' && detailView && detailView !== 'venture_status' && !selectedRequest && (
            <DetailView 
              viewType={detailView} 
              onBack={() => setDetailView(null)} 
              requests={requests}
              onSelectRequest={setSelectedRequest}
            />
          )}
          {selectedRequest && (
            <TransactionDetailScreen 
               request={selectedRequest} 
               onBack={() => setSelectedRequest(null)} 
            />
          )}

          {activeTab === 'marketplace' && <Marketplace />}
          {activeTab === 'fac' && <FACLanding />}
          {activeTab === 'upload_contacts' && <UploadContactsScreen onBack={handleNavigateToDashboard} />}
        </div>
      </main>

      {/* Modals */}
      {showRequestModal && (
        <IntroRequestFlow 
          user={currentUser} 
          onClose={() => setShowRequestModal(false)}
          onSubmit={handleNewRequest}
        />
      )}
    </div>
  );
};

export default App;