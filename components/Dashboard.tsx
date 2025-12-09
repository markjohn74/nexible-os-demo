
import React from 'react';
import { User, IntroRequest, DetailViewType } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, Target, Zap, Award, PieChart, ChevronRight } from 'lucide-react';

interface Props {
  user: User;
  requests: IntroRequest[];
  onNavigate: (view: DetailViewType) => void;
  onSwitchTab: (tab: 'dashboard' | 'marketplace' | 'fac' | 'upload_contacts') => void;
  onSelectRequest: (req: IntroRequest) => void;
}

const data = [
  { name: 'Jan', intros: 4, value: 2400 },
  { name: 'Feb', intros: 7, value: 1398 },
  { name: 'Mar', intros: 12, value: 9800 },
  { name: 'Apr', intros: 18, value: 14000 },
  { name: 'May', intros: 14, value: 12500 },
  { name: 'Jun', intros: 24, value: 21000 },
];

const StatCard = ({ title, value, sub, icon: Icon, color, onClick }: any) => (
  <button 
    onClick={onClick}
    className="w-full text-left bg-nexible-panel border border-slate-700 p-6 rounded-xl hover:border-nexible-gold hover:shadow-lg hover:shadow-nexible-gold/5 transition-all group relative overflow-hidden cursor-pointer"
  >
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-5 h-5 text-nexible-gold" />
    </div>
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-nexible-muted text-xs uppercase tracking-widest font-bold group-hover:text-white transition-colors">{title}</p>
        <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg bg-opacity-10 border border-opacity-10 ${color.bg} ${color.border}`}>
        <Icon className={`w-6 h-6 ${color.text}`} />
      </div>
    </div>
    <div className="flex items-center text-xs">
      {sub && (
        <span className="text-emerald-400 font-bold flex items-center gap-1 bg-emerald-400/10 px-1.5 py-0.5 rounded">
          <TrendingUp className="w-3 h-3" /> {sub}
        </span>
      )}
      <span className="text-slate-500 ml-2 font-medium">vs last month</span>
    </div>
  </button>
);

const RequestTable = ({ requests, onSelectRequest }: { requests: IntroRequest[], onSelectRequest: (req: IntroRequest) => void }) => (
  <div className="bg-nexible-panel border border-slate-700 rounded-xl overflow-hidden shadow-lg">
    <div className="p-6 border-b border-slate-700 flex justify-between items-center">
       <h3 className="text-xl font-bold text-white">Recent Deal Flow</h3>
       <button className="text-sm text-nexible-gold font-bold hover:text-white transition-colors">View All</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-900/50 text-xs uppercase text-nexible-muted font-bold tracking-wider">
          <tr>
            <th className="px-6 py-4">Target</th>
            <th className="px-6 py-4">Context</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Commission</th>
            <th className="px-6 py-4">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50">
          {requests.map((req) => (
            <tr 
                key={req.id} 
                onClick={() => onSelectRequest(req)}
                className="hover:bg-slate-700/30 transition-colors group cursor-pointer"
            >
              <td className="px-6 py-4">
                <div className="font-bold text-white group-hover:text-nexible-gold transition-colors">{req.targetName}</div>
                <div className="text-xs text-nexible-muted">{req.targetCompany}</div>
              </td>
              <td className="px-6 py-4 max-w-xs truncate text-slate-400 font-medium">{req.reason}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide
                  ${req.status === 'CommercialConverted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                    req.status === 'IntroMade' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                  {req.status.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </td>
              <td className="px-6 py-4 text-white font-mono font-bold">{req.commissionRate}%</td>
              <td className="px-6 py-4 text-slate-500 text-sm font-medium">{new Date(req.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
          {requests.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-nexible-muted">No requests found. Start creating value!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard: React.FC<Props> = ({ user, requests, onNavigate, onSwitchTab, onSelectRequest }) => {
  const role = user.role;

  // 1. VC TEAM DASHBOARD (Fund Overview)
  if (role === 'VC_Team') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Fund IV Ecosystem</h1>
            <p className="text-nexible-muted">Real-time network alpha and deal flow monitoring.</p>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 flex gap-4">
             <div className="text-center">
                <p className="text-[10px] uppercase text-slate-500 font-bold">Total Network</p>
                <p className="text-white font-bold">85,420</p>
             </div>
             <div className="w-px bg-slate-700"></div>
             <div className="text-center">
                <p className="text-[10px] uppercase text-slate-500 font-bold">Active Intro's</p>
                <p className="text-nexible-gold font-bold">142</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard onClick={() => onNavigate('commercial_value')} title="Total Commercial Value" value="$6.8M" sub="+24%" icon={DollarSign} color={{ bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500' }} />
          <StatCard onClick={() => onNavigate('active_intros')} title="Total Intros Made" value="842" sub="+12%" icon={Zap} color={{ bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' }} />
          <StatCard onClick={() => onNavigate('network_growth')} title="Active Connectors" value="156" sub="+5%" icon={Users} color={{ bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' }} />
          <StatCard onClick={() => onNavigate('active_intros')} title="Avg. Deal Speed" value="4 Days" sub="-1 Day" icon={Activity} color={{ bg: 'bg-nexible-gold', text: 'text-nexible-gold', border: 'border-nexible-gold' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-nexible-panel border border-slate-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Attributed Revenue (Alpha)</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
                  <Area type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-nexible-panel border border-slate-700 rounded-xl p-6">
             <h3 className="text-xl font-bold text-white mb-4">Top Connectors</h3>
             <div className="space-y-4">
                {[1,2,3,4,5].map((i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">#{i}</div>
                         <div className="text-sm">
                            <p className="text-white font-bold">Investible Team</p>
                            <p className="text-xs text-nexible-muted">Partner</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-nexible-gold font-bold text-sm">{(6000 - i*500).toLocaleString()} pts</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
        <RequestTable requests={requests} onSelectRequest={onSelectRequest} />
      </div>
    );
  }

  // 2. INVESTOR CONNECTOR DASHBOARD (Personal Rewards)
  if (role === 'Investor_Connector') {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-6">
           <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-nexible-gold p-1">
                 <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-nexible-gold text-black font-bold px-3 py-1 rounded-full text-xs shadow-lg">
                 {user.tier.toUpperCase()} TIER
              </div>
           </div>
           <div>
              <h1 className="text-4xl font-bold text-white mb-1">Welcome back, {user.name.split(' ')[0]}</h1>
              <p className="text-nexible-muted">Your network is generating significant value.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard onClick={() => onNavigate('venture_status')} title="Alpha Capital" value={user.points} sub="Top 5%" icon={Award} color={{ bg: 'bg-nexible-gold', text: 'text-nexible-gold', border: 'border-nexible-gold' }} />
          <StatCard onClick={() => onNavigate('commercial_value')} title="Value Generated" value="$450k" sub="3 Deals" icon={DollarSign} color={{ bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500' }} />
          <StatCard onClick={() => onNavigate('pending_requests')} title="Pending Requests" value="3" sub="Action Required" icon={Zap} color={{ bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' }} />
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-nexible-gold/30 rounded-xl p-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award className="w-48 h-48 text-nexible-gold" />
           </div>
           <h3 className="text-2xl font-bold text-white mb-2">Next Reward Unlocked: Carry Access</h3>
           <p className="text-slate-400 max-w-lg mb-6">You are 500 Alpha Capital away from Platinum Status, which grants priority access to Series B co-investment opportunities.</p>
           <div className="w-full max-w-md h-4 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-nexible-gold w-3/4 rounded-full shadow-[0_0_15px_#f59e0b]"></div>
           </div>
           <p className="text-xs text-nexible-gold mt-2 font-bold tracking-wide">1500 / 2000 ALPHA CAPITAL</p>
        </div>

        <RequestTable requests={requests.filter(r => r.connectorId === user.id || r.status === 'CommercialConverted')} onSelectRequest={onSelectRequest} />
      </div>
    );
  }

  // 3. PORTFOLIO/ACCESS FOUNDER DASHBOARD (Operational)
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Founder Network Dashboard</h1>
        <p className="text-nexible-muted">Leverage the Investible ecosystem to accelerate your roadmap.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard onClick={() => onNavigate('active_intros')} title="My Requests" value={requests.filter(r => r.requesterId === user.id).length} sub="Total" icon={Target} color={{ bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' }} />
        <StatCard onClick={() => onNavigate('matches_found')} title="Matches Found" value="12" sub="Avg 98% Score" icon={Users} color={{ bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' }} />
        <StatCard onClick={() => onNavigate('savings')} title="Est. Savings" value="$12.5k" sub="Via Marketplace" icon={PieChart} color={{ bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2">
            <RequestTable requests={requests.filter(r => r.requesterId === user.id)} onSelectRequest={onSelectRequest} />
         </div>
         <div className="bg-nexible-panel border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
               <button onClick={() => {}} className="w-full py-3 px-4 bg-nexible-gold text-black font-bold rounded-lg hover:bg-nexible-goldHover transition-colors text-left flex items-center justify-between group">
                  <span>Request New Intro</span>
                  <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
               </button>
               <button 
                  onClick={() => onSwitchTab('marketplace')}
                  className="w-full py-3 px-4 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors text-left flex items-center justify-between border border-slate-700"
                >
                  <span>Browse Marketplace</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
               </button>
               <button 
                  onClick={() => onSwitchTab('upload_contacts')}
                  className="w-full py-3 px-4 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors text-left flex items-center justify-between border border-slate-700"
                >
                  <span>Upload Contacts (CSV)</span>
                  <Users className="w-4 h-4 text-blue-400" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
