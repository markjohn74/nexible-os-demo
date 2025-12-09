
import React, { useRef, useState } from 'react';
import { ArrowLeft, UploadCloud, Shield, FileText, CheckCircle, Linkedin } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const UploadContactsScreen: React.FC<Props> = ({ onBack }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadState('uploading');
      // Simulate upload process
      setTimeout(() => setUploadState('success'), 2000);
    }
  };

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-8"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
      </button>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20">
           <UploadCloud className="w-8 h-8 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Integrate Your Network (Private & Secure)</h1>
        <p className="text-nexible-muted max-w-2xl mx-auto text-lg">
          Upload your LinkedIn Connections to unlock reciprocal value. Your network data is encrypted, stored securely, and only used for specific match requests you approve.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Instruction Box */}
        <div className="bg-nexible-panel border border-slate-700 rounded-2xl p-8 shadow-xl">
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 pb-4 border-b border-slate-700">
             <Linkedin className="w-6 h-6 text-blue-400 fill-current" />
             How to Export from LinkedIn
           </h3>
           
           <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white shrink-0 shadow-sm">1</div>
                 <div>
                    <p className="text-white font-bold mb-1">Settings & Privacy</p>
                    <p className="text-sm text-slate-400 leading-relaxed">Log into LinkedIn and navigate to 'Settings & Privacy' from your profile menu.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white shrink-0 shadow-sm">2</div>
                 <div>
                    <p className="text-white font-bold mb-1">Data Privacy</p>
                    <p className="text-sm text-slate-400 leading-relaxed">Under 'Data Privacy' in the sidebar, select 'Get a copy of your data'.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white shrink-0 shadow-sm">3</div>
                 <div>
                    <p className="text-white font-bold mb-1">Request Archive</p>
                    <p className="text-sm text-slate-400 leading-relaxed">Select 'Connections' specifically. LinkedIn will email you the file (usually within 10 mins).</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center font-bold text-white shrink-0 shadow-sm">4</div>
                 <div>
                    <p className="text-white font-bold mb-1">Download & Upload</p>
                    <p className="text-sm text-slate-400 leading-relaxed">Download the <strong>Connections.csv</strong> file from the email and upload it here.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Upload Action Area */}
        <div className="flex flex-col h-full gap-6">
           <div 
             className={`flex-1 border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all min-h-[300px] relative overflow-hidden
               ${uploadState === 'success' ? 'border-emerald-500 bg-emerald-500/5' : 'border-slate-600 bg-slate-800/30 hover:border-nexible-gold hover:bg-slate-800/50'}`}
           >
              {uploadState === 'idle' && (
                <>
                  <div className="bg-slate-800 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                    <FileText className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-xl font-bold text-white mb-2">Drop Connections.csv here</p>
                  <p className="text-slate-500 text-sm mb-8">or click to browse local files</p>
                  <button 
                    onClick={handleUploadClick}
                    className="bg-nexible-gold text-black font-bold py-3 px-8 rounded-xl hover:bg-nexible-goldHover transition-all shadow-lg shadow-nexible-gold/10 transform active:scale-95"
                  >
                    Select CSV File
                  </button>
                </>
              )}

              {uploadState === 'uploading' && (
                <div className="w-full max-w-xs relative z-10">
                   <div className="w-16 h-16 border-4 border-slate-700 border-t-nexible-gold rounded-full animate-spin mx-auto mb-6"></div>
                   <p className="text-white font-bold animate-pulse text-lg">Encrypting & Uploading...</p>
                   <p className="text-slate-500 text-sm mt-2">Please do not close this window.</p>
                </div>
              )}

              {uploadState === 'success' && (
                 <div className="animate-fade-in relative z-10">
                   <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                     <CheckCircle className="w-10 h-10 text-emerald-500" />
                   </div>
                   <p className="text-2xl font-bold text-white mb-2">Upload Complete</p>
                   <p className="text-slate-400 text-sm max-w-xs mx-auto">3,420 connections successfully hashed and mapped to the Nexible Graph.</p>
                   <button onClick={onBack} className="mt-8 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                     Return to Dashboard
                   </button>
                 </div>
              )}
              
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept=".csv" 
                onChange={handleFileChange} 
              />
           </div>

           <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-4 shadow-lg">
              <Shield className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Privacy Guarantee</strong> 
                  Your data is only used for match requests and is never shared publicly. We use industry-standard hashing to ensure your contact list remains private to your organization until you approve a connection.
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UploadContactsScreen;
