
import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background with Grid and Blur */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1DB954] blur-[160px] rounded-full opacity-20"></div>
      </div>

      {/* Visual Element - Glass Building (Placeholder Image with 3D feel) */}
      <div className="absolute right-[-10%] bottom-0 w-2/3 h-full z-0 pointer-events-none opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover transform skew-x-[-10deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1C1C1C]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs font-semibold mb-8 uppercase tracking-widest backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></span>
          Now Enrolling for Batch 2024
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          We Don't Teach <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-[#C9A14A]">
            Trading First.
          </span>
        </h1>
        
        <p className="text-4xl md:text-5xl font-light text-white/60 mb-8 max-w-3xl leading-snug">
          We Build <span className="text-white">Entrepreneurs</span> First.
        </p>

        <p className="text-lg text-white/50 mb-12 max-w-2xl leading-relaxed">
          Learn Business Foundations, Marketing Systems, Sales Psychology, 
          and then Master Trading & Investment with Confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-10 py-5 bg-[#1DB954] text-white rounded-full text-lg font-bold hover:bg-[#169443] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#1DB954]/20 flex items-center justify-center gap-2">
            Start Your Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          
          <button className="px-10 py-5 bg-white/10 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            Watch How it Works
          </button>
        </div>

        {/* Floating Icons */}
        <div className="mt-20 flex flex-wrap justify-center lg:justify-start gap-12 text-white/30">
          {['20k+ Students', '4.9/5 Rating', '95% Success Rate', 'Elite Community'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]"></div>
              <span className="text-sm font-medium uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
