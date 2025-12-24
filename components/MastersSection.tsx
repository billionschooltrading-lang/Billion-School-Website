
import React from 'react';
import { MASTERS } from '../constants';
import { Quote, ArrowRight } from 'lucide-react';

const MastersSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#C9A14A] font-bold text-sm tracking-[0.2em] uppercase mb-4">The Architect Mindset</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C] mb-6">Learning from the Masters</p>
          <div className="w-20 h-1 bg-[#1DB954] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MASTERS.map((master, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={master.image} 
                  alt={master.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-serif font-bold">{master.name}</h3>
                  <p className="text-[#C9A14A] text-xs font-bold uppercase tracking-widest">{master.role}</p>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6 relative">
                  <Quote className="w-8 h-8 text-[#1DB954] opacity-10 absolute -top-4 -left-2" />
                  <p className="text-gray-600 italic leading-relaxed relative z-10">"{master.quote}"</p>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#1C1C1C]">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Key Input</span>
                    <p className="text-sm text-[#1C1C1C] font-medium">{master.input}</p>
                  </div>
                  <div className="p-4 bg-[#1DB954]/5 rounded-xl border-l-4 border-[#1DB954]">
                    <span className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest block mb-1">Major Output</span>
                    <p className="text-sm text-[#1C1C1C] font-medium">{master.output}</p>
                  </div>
                </div>

                <button className="mt-8 flex items-center gap-2 text-sm font-bold text-[#1C1C1C] group/btn">
                  Study their blueprint
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#1DB954]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MastersSection;
