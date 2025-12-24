
import React from 'react';
import { Instagram, Heart, MessageCircle, Send } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const posts = [
    { id: 1, type: 'video', url: 'https://images.unsplash.com/photo-1611974717525-580452c418bc?auto=format&fit=crop&q=80&w=400', caption: 'Mindset is everything. #BillionMindset' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400', caption: 'Today\'s analysis of NIFTY. #StockMarket' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1579621970795-87f9ac756a70?auto=format&fit=crop&q=80&w=400', caption: 'From zero to business master. #Entrepreneur' },
    { id: 4, type: 'video', url: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?auto=format&fit=crop&q=80&w=400', caption: 'Risk control explained. #RiskManagement' },
    { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400', caption: 'Funding session results. #SuccessStories' },
    { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400', caption: 'Building systems for growth. #Marketing' },
  ];

  return (
    <section id="instagram" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[#C9A14A] font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Follow @BillionSchool
            </h2>
            <p className="text-4xl font-serif font-bold text-[#1C1C1C]">Visual PGDP Experience</p>
          </div>
          <button className="px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-[#1DB954] transition-all flex items-center gap-2">
            View on Instagram <Instagram className="w-4 h-4 text-[#1DB954]" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm">
              <img src={post.url} alt="post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                <div className="flex flex-col items-center gap-1">
                  <Heart className="w-5 h-5 fill-white" />
                  <span className="text-[10px] font-bold">1.2k</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="text-[10px] font-bold">84</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
