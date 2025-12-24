
import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center overflow-hidden bg-white rounded-lg shadow-sm">
            <img src={LOGO_URL} alt="Billion School Logo" className="h-full w-full object-contain" />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>
            BILLION <span className="text-[#3B82F6]">SCHOOL</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#ecosystem" className={`text-sm font-semibold hover:text-[#3B82F6] transition-colors ${isScrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>Ecosystem</a>
          <a href="#curriculum" className={`text-sm font-semibold hover:text-[#3B82F6] transition-colors ${isScrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>Curriculum</a>
          <a href="#about" className={`text-sm font-semibold hover:text-[#3B82F6] transition-colors ${isScrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>About</a>
          <button className="px-6 py-2.5 bg-[#3B82F6] text-white rounded-full text-sm font-bold hover:bg-[#2563EB] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Join Now
          </button>
        </div>

        <button className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
