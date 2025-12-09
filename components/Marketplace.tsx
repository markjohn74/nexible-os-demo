
import React from 'react';
import { VENDORS } from '../services/mockData';
import { Star, ShieldCheck, ExternalLink, Tag } from 'lucide-react';

const Marketplace: React.FC = () => {
  // Group vendors by category
  const categories = Array.from(new Set(VENDORS.map(v => v.category)));

  return (
    <div className="space-y-12 animate-fade-in pb-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Vetted Services Marketplace</h1>
        <p className="text-nexible-muted max-w-2xl">
          Access curated partners vetted by Investible. Exclusive rates for portfolio companies and Access Founders designed to extend your runway.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
                <Tag className="w-5 h-5 text-nexible-gold" />
                {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VENDORS.filter(v => v.category === category).map((vendor) => (
                <div key={vendor.id} className="bg-nexible-panel border border-slate-700 rounded-xl p-6 flex flex-col hover:border-nexible-gold/50 transition-all group relative overflow-hidden shadow-lg">
                    {/* Discount Badge */}
                    {vendor.standardPrice && vendor.nexiblePrice && (
                        <div className="absolute top-0 right-0 bg-nexible-gold text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider shadow-sm z-10">
                            Partner Rate
                        </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-4">
                    <div className="bg-slate-900 p-3 rounded-lg text-xl font-bold text-white border border-slate-700 shadow-inner w-12 h-12 flex items-center justify-center">
                        {vendor.name.charAt(0)}
                    </div>
                    {vendor.verified && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20 mt-1">
                            <ShieldCheck className="w-3 h-3" /> VETTED
                        </div>
                    )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-nexible-gold transition-colors truncate">{vendor.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                         <div className="flex text-amber-400">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-3 h-3 ${i < Math.floor(vendor.rating) ? 'fill-current' : 'text-slate-600'}`} />
                             ))}
                         </div>
                         <span className="text-xs text-slate-500 font-medium">({vendor.rating})</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-6 flex-1 border-b border-slate-700 pb-4 leading-relaxed">
                        {vendor.description}
                    </p>
                    
                    <div className="space-y-4">
                        {vendor.standardPrice && vendor.nexiblePrice ? (
                            <div className="flex justify-between items-end bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Standard</p>
                                    <p className="text-sm text-slate-500 line-through font-medium decoration-slate-500/50">{vendor.standardPrice}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-nexible-gold uppercase tracking-wider mb-0.5 font-bold">Nexible Price</p>
                                    <p className="text-lg font-bold text-white">{vendor.nexiblePrice}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between p-3">
                                <span className="text-sm font-bold text-white">{vendor.priceRange}</span>
                            </div>
                        )}
                    
                        <button className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-500 shadow-sm hover:shadow-md">
                        Connect Partner <ExternalLink className="w-3 h-3" />
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;
