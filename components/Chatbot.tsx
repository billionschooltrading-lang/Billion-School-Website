
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone as WhatsApp, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER, LOGO_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Welcome to Billion School! I'm your Growth Architect. How can I help you build your empire today?" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let botResponse = "Excellent choice. We offer two paths: an Offline 1-Month Intensive (5 seats only) and an Online 2-Month Flexible program. Which one would you like to know more about?";
      
      const lower = userMsg.toLowerCase();
      if (lower.includes('offline')) {
        botResponse = "Our Offline program is 1 month of direct interaction, live mentorship, and working models. We only take 5 students per batch to ensure mastery. Would you like to check availability?";
      } else if (lower.includes('online')) {
        botResponse = "The Online program is a 2-month flexible path. You get 1-2 hours of lessons daily at times that suit you. It's our most popular path for beginners!";
      } else if (lower.includes('trading')) {
        botResponse = "Trading is our Phase 3 Mastery. We first ensure your Business and Marketing systems are profitable to provide capital.";
      } else if (lower.includes('funding')) {
        botResponse = "Yes! Based on results in our Expert Level program, funding will be provided. It's our merit-based backing initiative.";
      } else if (lower.includes('instagram') || lower.includes('social')) {
        botResponse = "Our Instagram (@billionschool) is full of visual blueprints. Check the social icons in this chat to follow us!";
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Billion%20School%2C%20I'm%20interested%20in%20your%20entrepreneurship%20program.%20Tell%20me%20about%20the%20offline%20batch.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="group w-16 h-16 bg-[#3B82F6] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA]"></div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#1DB954] rounded-full border-2 border-white z-10"></div>
          <MessageCircle className="w-8 h-8 relative z-20" />
        </button>
      ) : (
        <div className="w-[380px] h-[620px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-[#1C1C1C] p-6 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/20 rounded-bl-full"></div>
            <div className="flex items-center gap-4 relative z-10">
              {/* Bot Logo / Avatar */}
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border-2 border-[#3B82F6] p-1 overflow-hidden">
                  <img src={LOGO_URL} alt="Avatar" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1DB954] rounded-full border-2 border-[#1C1C1C]"></div>
              </div>
              <div>
                <p className="text-white text-base font-bold tracking-tight">Billion Mentor</p>
                <div className="flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 bg-[#1DB954] rounded-full animate-pulse"></span>
                   <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Active Batch Support</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors relative z-10">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Social Channel Links */}
          <div className="flex justify-around items-center p-4 bg-gray-50/80 border-b border-gray-100">
            <a href={INSTAGRAM_URL} target="_blank" className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#E4405F] group-hover:bg-[#E4405F] group-hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold uppercase text-gray-400">Instagram</span>
            </a>
            <a href={YOUTUBE_URL} target="_blank" className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold uppercase text-gray-400">YouTube</span>
            </a>
            <button onClick={openWhatsApp} className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <WhatsApp className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold uppercase text-gray-400">WhatsApp</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30 no-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[28px] text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#3B82F6] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Offline Batch..."
              className="flex-1 bg-gray-100 rounded-full px-6 py-3.5 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-[#3B82F6] text-white rounded-full flex items-center justify-center hover:bg-blue-600 shadow-xl shadow-blue-500/30 transition-all active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
