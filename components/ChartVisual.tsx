
import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '09:30', price: 100 },
  { time: '10:00', price: 105 },
  { time: '10:30', price: 102 },
  { time: '11:00', price: 108 },
  { time: '11:30', price: 115 },
  { time: '12:00', price: 112 },
  { time: '12:30', price: 120 },
  { time: '13:00', price: 125 },
  { time: '13:30', price: 122 },
  { time: '14:00', price: 130 },
  { time: '14:30', price: 135 },
  { time: '15:00', price: 132 },
  { time: '15:30', price: 140 },
];

const ChartVisual: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-[#1C1C1C] rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
      {/* Decorative candles overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grid grid-cols-12 gap-2 p-10 items-end">
        {[...Array(24)].map((_, i) => (
          <div key={i} className={`w-full ${i % 3 === 0 ? 'bg-[#E53935]' : 'bg-[#1DB954]'}`} style={{ height: `${Math.random() * 80 + 20}%` }}></div>
        ))}
      </div>
      
      <div className="relative z-10 w-full h-full">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold text-lg">BTC/USDT</span>
            <span className="text-[#1DB954] text-sm">+12.45%</span>
          </div>
          <div className="flex gap-2">
            {['1M', '5M', '15M', '1H', '1D'].map(t => (
              <span key={t} className={`text-[10px] px-2 py-1 rounded cursor-pointer ${t === '1D' ? 'bg-[#1DB954] text-white' : 'text-gray-500 hover:text-white'}`}>{t}</span>
            ))}
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1DB954" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#1DB954" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#222', border: 'none', color: '#fff', borderRadius: '8px' }}
              itemStyle={{ color: '#1DB954' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#1DB954" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartVisual;
