
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Phases from './components/Phases';
import TrustSection from './components/TrustSection';
import MastersSection from './components/MastersSection';
import CurriculumDetailed from './components/CurriculumDetailed';
import InstagramSection from './components/InstagramSection';
import VideoSection from './components/VideoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#1DB954]/30 bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="animate-on-scroll">
          <Ecosystem />
        </div>
        
        <div className="animate-on-scroll">
          <CurriculumDetailed />
        </div>
        
        <Phases />

        <div className="animate-on-scroll">
          <MastersSection />
        </div>

        <div className="animate-on-scroll">
          <VideoSection />
        </div>

        <div className="animate-on-scroll">
          <InstagramSection />
        </div>
        
        <div className="animate-on-scroll">
          <TrustSection />
        </div>
        
        <div className="animate-on-scroll">
          <CTA />
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
