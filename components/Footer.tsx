
import React from 'react';
import { WHATSAPP_NUMBER, LOGO_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';
import { Phone, Mail, Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl shadow-md p-1">
                <img src={LOGO_URL} alt="Billion School Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1C1C1C]">
                BILLION <span className="text-[#3B82F6]">SCHOOL</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Building entrepreneurs before traders. We focus on business foundations, marketing mastery, and elite capital backing for our best students.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500 text-sm font-semibold">
                <Phone className="w-4 h-4 text-[#3B82F6]" /> +91 {WHATSAPP_NUMBER}
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm font-semibold">
                <Mail className="w-4 h-4 text-[#3B82F6]" /> info@billionschool.in
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 text-sm uppercase tracking-widest">Learning Path</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#curriculum" className="hover:text-[#3B82F6] transition-colors">2-Month Intensive Trading</a></li>
              <li><a href="#curriculum" className="hover:text-[#3B82F6] transition-colors">Business System Setup</a></li>
              <li><a href="#curriculum" className="hover:text-[#3B82F6] transition-colors">Marketing & Psychology</a></li>
              <li><a href="#curriculum" className="hover:text-[#3B82F6] transition-colors">Mastermind Batch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 text-sm uppercase tracking-widest">Digital Ecosystem</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href={INSTAGRAM_URL} target="_blank" className="hover:text-[#3B82F6] transition-colors">Instagram Insights</a></li>
              <li><a href={YOUTUBE_URL} target="_blank" className="hover:text-[#3B82F6] transition-colors">YouTube Masterclasses</a></li>
              <li><a href="#about" className="hover:text-[#3B82F6] transition-colors">Prop-Funding Program</a></li>
              <li><a href="#ecosystem" className="hover:text-[#3B82F6] transition-colors">Mobile App Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1C1C1C] mb-6 text-sm uppercase tracking-widest">Connect with Us</h4>
            <p className="text-gray-500 mb-6 text-[10px] leading-relaxed uppercase tracking-widest font-bold">Join the elite list of entrepreneurs.</p>
            <div className="flex gap-2 mb-8">
              <input type="email" placeholder="Email Address" className="bg-gray-50 border border-gray-100 rounded-full px-6 py-3.5 text-xs w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold" />
              <button className="bg-[#1C1C1C] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black transition-all transform hover:scale-105 active:scale-95 shrink-0 shadow-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={YOUTUBE_URL} target="_blank" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all shadow-sm">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 BILLION SCHOOL. BUILT BY ENTREPRENEURS.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
            <a href="#" className="hover:text-[#3B82F6]">Privacy</a>
            <a href="#" className="hover:text-[#3B82F6]">Terms</a>
            <a href="#" className="hover:text-[#3B82F6]">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
