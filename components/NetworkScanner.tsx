import React, { useEffect, useState } from 'react';

const NetworkScanner: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  // Simulation stages
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 500); // Start scanning
    const t2 = setTimeout(() => setStage(2), 2500); // Found matches
    const t3 = setTimeout(() => {
      setStage(3);
      onComplete();
    }, 4000); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="w-full h-64 bg-slate-900 relative overflow-hidden rounded-xl border border-nexible-panel flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-20 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="bg-slate-700 rounded-full w-1 h-1 m-auto" />
        ))}
      </div>

      {/* Central Radar Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-full border-2 border-nexible-gold/50 flex items-center justify-center transition-all duration-1000 ${stage >= 1 ? 'scale-150 opacity-100' : 'scale-50 opacity-50'}`}>
           <div className={`w-full h-full rounded-full bg-nexible-gold/20 animate-ping`} />
        </div>
      </div>

      {/* Scanning Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-nexible-gold font-mono text-sm tracking-widest uppercase animate-pulse">
          {stage === 0 && "Initializing Network Protocol..."}
          {stage === 1 && "Scanning 15,420 Nodes..."}
          {stage === 2 && "Optimizing Relationship Paths..."}
          {stage === 3 && "Matches Found"}
        </p>
      </div>

      {/* Nodes Lighting Up */}
      {stage >= 1 && (
        <>
          {/* Random "Found" Nodes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_purple] animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_emerald] animate-bounce" style={{ animationDelay: '0.8s' }} />
          
          {/* Connecting Lines (SVG overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="cyan" strokeWidth="1" strokeOpacity="0.5" className="animate-[pulse_2s_infinite]" />
            <line x1="50%" y1="50%" x2="75%" y2="33%" stroke="purple" strokeWidth="1" strokeOpacity="0.5" className="animate-[pulse_2s_infinite_0.3s]" />
            <line x1="50%" y1="50%" x2="33%" y2="66%" stroke="emerald" strokeWidth="1" strokeOpacity="0.5" className="animate-[pulse_2s_infinite_0.6s]" />
          </svg>
        </>
      )}

      {stage === 3 && (
        <div className="absolute inset-0 bg-nexible-gold/10 flex items-center justify-center backdrop-blur-sm transition-opacity duration-500">
           <div className="text-4xl font-bold text-white drop-shadow-lg">4 Matches Found</div>
        </div>
      )}
    </div>
  );
};

export default NetworkScanner;