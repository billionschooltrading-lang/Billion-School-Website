
import React from 'react';
import { Youtube, Play, ArrowRight, MonitorPlay } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videos = [
    { title: "Building Entrepreneurs First", duration: "12:45", views: "45k", thumb: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { title: "Psychology of Trading Losses", duration: "08:20", views: "12k", thumb: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800" },
    { title: "Capital Readiness Framework", duration: "15:10", views: "28k", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="youtube" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1C1C1C] rounded-[48px] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E53935]/5 rounded-l-full blur-[100px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-[#E53935] font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Youtube className="w-5 h-5" /> YouTube Masterclass
                </h2>
                <p className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Elite Insights, <br />Every Week.</p>
                <p className="text-white/50 text-lg leading-relaxed">
                  Subscribe to our official YouTube channel for deep dives into market mechanics, founder interviews, and live execution sessions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#E53935] text-white rounded-full font-bold flex items-center gap-3 hover:bg-[#c62828] transition-all transform hover:-translate-y-1">
                  Subscribe Now <Youtube className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full">
                  <MonitorPlay className="w-5 h-5 text-[#1DB954]" />
                  <span className="text-white/80 font-bold text-sm">500+ Videos</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((vid, idx) => (
                <div key={idx} className={`group relative rounded-3xl overflow-hidden cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <img src={vid.thumb} alt="video thumb" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 fill-[#1C1C1C] text-[#1C1C1C] ml-1" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white">
                      {vid.duration}
                    </div>
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-b-3xl">
                    <h4 className="text-white font-bold mb-2 group-hover:text-[#E53935] transition-colors">{vid.title}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest">{vid.views} views • Weekly Mentorship</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
