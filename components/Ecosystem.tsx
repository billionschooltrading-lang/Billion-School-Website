
import React from 'react';
import { Globe, Smartphone, Camera, GraduationCap, ArrowUpRight } from 'lucide-react';
import { ECOSYSTEM } from '../constants';

const iconMap: Record<string, any> = {
  Globe,
  Smartphone,
  Camera,
  GraduationCap
};

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[#C9A14A] font-bold text-sm tracking-[0.2em] uppercase mb-4">The Billion Ecosystem</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C] mb-6">Omnipresent Learning</p>
          <div className="w-20 h-1 bg-[#1DB954] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Billion School operates as a complete digital ecosystem designed for the modern entrepreneur who demands excellence across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ECOSYSTEM.map((item, index) => {
            const IconComp = iconMap[item.icon];
            return (
              <a 
                href={item.target}
                key={index} 
                className="group p-8 border border-gray-100 rounded-3xl hover:border-[#1DB954]/30 hover:shadow-2xl hover:shadow-[#1DB954]/5 transition-all duration-500 bg-white relative overflow-hidden block"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1DB954]/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-[#1DB954]/10 transition-colors"></div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-[#1DB954]" />
                </div>
                
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1DB954]/10 transition-all duration-500">
                  <IconComp className="w-8 h-8 text-[#1DB954]" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="inline-flex items-center text-[#1DB954] font-semibold text-xs uppercase tracking-widest translate-x-[-10px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">
                  Access Module
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
