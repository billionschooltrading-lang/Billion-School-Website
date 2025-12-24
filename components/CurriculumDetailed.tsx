
import React from 'react';
import { CURRICULUM_MODULES, COLORS } from '../constants';
import { CheckCircle2, ChevronRight, Award, Users, Clock, Monitor, MapPin } from 'lucide-react';

const CurriculumDetailed: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#3B82F6] font-bold text-sm tracking-[0.2em] uppercase mb-4">The Syllabus</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C] mb-6">Choose Your Path to Mastery</p>
          <div className="w-20 h-1 bg-[#C9A14A] mx-auto"></div>
        </div>

        {/* Program Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Offline Path */}
          <div className="relative group bg-[#1C1C1C] rounded-[40px] p-10 overflow-hidden text-white transition-all hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/20 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Offline Intensive</h3>
                  <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest">In-Person Experience</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1DB954] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg">1 Month Program</span>
                    <span className="text-white/50 text-sm">Rapid mastery through direct interaction.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#C9A14A] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg">Elite Batch: 5 Seats Only</span>
                    <span className="text-white/50 text-sm">Ultra-exclusive focus per batch.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#3B82F6] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg">Live Trading Mentorship</span>
                    <span className="text-white/50 text-sm">Direct market interaction & working models.</span>
                  </div>
                </li>
              </ul>
              
              <button className="w-full py-4 bg-white text-[#1C1C1C] rounded-full font-bold hover:bg-[#3B82F6] hover:text-white transition-all shadow-xl">
                Apply for Offline Seat
              </button>
            </div>
          </div>

          {/* Online Path */}
          <div className="relative group bg-gray-50 border border-gray-100 rounded-[40px] p-10 overflow-hidden transition-all hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1DB954]/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1DB954] flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Online Flexible</h3>
                  <p className="text-[#1DB954] text-xs font-bold uppercase tracking-widest">Digital Learning</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1DB954] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg text-[#1C1C1C]">2 Month Comprehensive</span>
                    <span className="text-gray-500 text-sm">Deep dive into all 200 topics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#3B82F6] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg text-[#1C1C1C]">Flexible Timings</span>
                    <span className="text-gray-500 text-sm">Choose your slots for learning.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#C9A14A] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-lg text-[#1C1C1C]">1-2 Hours Daily</span>
                    <span className="text-gray-500 text-sm">Consistent growth with daily modules.</span>
                  </div>
                </li>
              </ul>
              
              <button className="w-full py-4 bg-[#1C1C1C] text-white rounded-full font-bold hover:bg-[#1DB954] transition-all shadow-xl">
                Enroll Online Today
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Core Modules (Included in Both Paths)</p>
          <div className="w-10 h-1 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURRICULUM_MODULES.map((module) => (
            <div key={module.id} className="group relative bg-white border border-gray-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-bl-full transition-transform group-hover:scale-110"
                style={{ backgroundColor: module.color }}
              ></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-3"
                    style={{ backgroundColor: module.color }}
                  >
                    Module 0{module.id} — {module.level}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1C1C1C]">{module.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Lessons</p>
                  <p className="text-xl font-bold text-[#1C1C1C]">{module.lessons}</p>
                </div>
              </div>

              <p className="text-[#1DB954] font-medium text-sm mb-6 flex items-center gap-2">
                <ChevronRight className="w-4 h-4" /> {module.focus}
              </p>

              <div className="space-y-4">
                {module.chapters.map((chapter, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-gray-100 transition-all">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ backgroundColor: `${module.color}15`, color: module.color }}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-sm font-semibold text-[#1C1C1C]">{chapter}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 flex justify-between items-center">
                <button className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#1DB954] transition-colors">View full syllabus</button>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Banner */}
        <div className="mt-20 p-8 md:p-12 bg-[#1C1C1C] rounded-[40px] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1DB954]/10 to-[#C9A14A]/10 opacity-50"></div>
          <div className="relative z-10">
            <h4 className="text-[#C9A14A] font-bold text-lg mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">💰</span> Prop-Funding Opportunity
            </h4>
            <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
              Based on the Results - Funding will be provided
            </p>
            <p className="text-white/50 max-w-xl mx-auto text-sm">
              We don't just teach you; we back our best students with real capital to trade in global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumDetailed;
