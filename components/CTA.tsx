
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#1C1C1C] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DB954] blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Your future doesn't <br /> 
              change by <span className="text-[#C9A14A]">chance</span>.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
              It changes by decision. Join the elite 1% of entrepreneurs who understand the blueprint of wealth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="px-12 py-6 bg-[#1DB954] text-white rounded-full text-xl font-bold hover:bg-[#169443] transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1DB954]/40">
                Enroll Now
              </button>
              <button className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-full text-xl font-bold hover:bg-white/20 transition-all">
                Talk to Our Team
              </button>
            </div>
            
            <div className="pt-12 flex flex-wrap justify-center gap-8 items-center border-t border-white/10">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">20,000+</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Active Learners</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">120+</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Global Mentors</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">4.9/5</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Trustpilot Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
