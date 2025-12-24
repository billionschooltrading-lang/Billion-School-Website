
import React from 'react';
import { PHASES } from '../constants';
import ChartVisual from './ChartVisual';
import { CheckCircle2 } from 'lucide-react';

const Phases: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {PHASES.map((phase, index) => (
          <div 
            key={phase.id} 
            className={`flex flex-col lg:flex-row items-center gap-16 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Part */}
            <div className="flex-1 w-full">
              {phase.visualType === 'blueprint' && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#C9A14A]/10 rounded-3xl blur-3xl group-hover:bg-[#C9A14A]/20 transition-all"></div>
                  <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-xl overflow-hidden min-h-[400px]">
                    <div className="absolute inset-0 grid-pattern opacity-10"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <div className="w-16 h-1 bg-[#C9A14A] mb-8"></div>
                      <h4 className="text-3xl font-serif font-bold text-[#1C1C1C] mb-6">Foundational Blueprint</h4>
                      <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-4 bg-gray-50 rounded-full overflow-hidden">
                            <div className="h-full bg-[#C9A14A]/20 animate-pulse" style={{ width: `${Math.random() * 50 + 40}%` }}></div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 flex gap-4">
                        <div className="w-24 h-24 border-2 border-dashed border-[#C9A14A]/30 rounded-2xl flex items-center justify-center text-[#C9A14A]/40 font-bold">CORE</div>
                        <div className="w-24 h-24 border-2 border-dashed border-[#C9A14A]/30 rounded-2xl flex items-center justify-center text-[#C9A14A]/40 font-bold">SCALE</div>
                        <div className="w-24 h-24 border-2 border-dashed border-[#C9A14A]/30 rounded-2xl flex items-center justify-center text-[#C9A14A]/40 font-bold">RISK</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {phase.visualType === 'funnel' && (
                <div className="relative group">
                   <div className="absolute inset-0 bg-[#1DB954]/10 rounded-3xl blur-3xl"></div>
                   <div className="relative bg-white border border-gray-100 p-12 rounded-3xl shadow-xl flex flex-col items-center gap-2">
                     <div className="w-full h-12 bg-gradient-to-r from-[#1DB954] to-[#169443] rounded-lg flex items-center justify-center text-white font-bold text-xs">AWARENESS</div>
                     <div className="w-[85%] h-12 bg-gradient-to-r from-[#1DB954] to-[#169443] opacity-90 rounded-lg flex items-center justify-center text-white font-bold text-xs">INTEREST</div>
                     <div className="w-[70%] h-12 bg-gradient-to-r from-[#1DB954] to-[#169443] opacity-80 rounded-lg flex items-center justify-center text-white font-bold text-xs">DECISION</div>
                     <div className="w-[55%] h-12 bg-gradient-to-r from-[#1DB954] to-[#169443] opacity-70 rounded-lg flex items-center justify-center text-white font-bold text-xs">ACTION</div>
                     <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-3">
                          {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/seed/${i+40}/50/50`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />)}
                        </div>
                        <span className="text-[#1DB954] font-bold text-sm">+842 Conversion</span>
                     </div>
                   </div>
                </div>
              )}

              {phase.visualType === 'chart' && (
                <ChartVisual />
              )}
            </div>

            {/* Content Part */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A14A]">Phase 0{phase.id}</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C] leading-tight">{phase.title}</h3>
                <p className="text-xl font-medium text-[#1DB954]">{phase.theme}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-[#1DB954] mt-0.5 shrink-0" />
                    <span className="text-gray-600 group-hover:text-[#1C1C1C] transition-colors">{topic}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-3 text-[#1C1C1C] font-bold group">
                <span className="relative">
                  Learn more about Phase 0{phase.id}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Phases;
