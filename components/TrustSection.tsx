
import React from 'react';
import { Quote } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1C1C1C] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1DB954]/5 skew-x-[-20deg] translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C9A14A]/20 rounded-full blur-[60px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Founder" 
                className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20">
                <p className="text-white font-bold text-lg mb-1">Dr. Alexander Sterling</p>
                <p className="text-[#C9A14A] text-sm uppercase tracking-widest font-semibold">Founder, Billion School</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <Quote className="w-16 h-16 text-[#C9A14A] opacity-20" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              "We don't sell dreams, <br />
              <span className="text-[#1DB954]">we build skills."</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed font-light italic">
              "The market doesn't care about your aspirations. It cares about your foundations. At Billion School, we strip away the noise and focus on the architecture of a successful mind."
            </p>
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1DB954]/20 flex items-center justify-center border border-[#1DB954]/40">
                  <span className="text-[#1DB954] font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ethical Education Promise</h4>
                  <p className="text-white/50 text-sm">Transparency in every lesson, realism in every market analysis.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A14A]/20 flex items-center justify-center border border-[#C9A14A]/40">
                  <span className="text-[#C9A14A] font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Vision Statement</h4>
                  <p className="text-white/50 text-sm">To empower a generation of entrepreneurs who master capital before trading it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
