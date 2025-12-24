
import React from 'react';
import { Globe, Smartphone, Camera, GraduationCap } from 'lucide-react';
import { Phase, EcosystemItem } from './types';

export const COLORS = {
  white: '#FFFFFF',
  green: '#1DB954',
  red: '#E53935',
  black: '#1C1C1C',
  gold: '#C9A14A',
  blue: '#3B82F6', // Basic Module Blue
};

export const LOGO_URL = "https://storage.googleapis.com/static-content-00/1714571735439-5060424683050186.png";
export const WHATSAPP_NUMBER = "9445084674";
export const INSTAGRAM_URL = "https://instagram.com/billionschool";
export const YOUTUBE_URL = "https://youtube.com/@billionschool";

export interface Master {
  name: string;
  role: string;
  quote: string;
  image: string;
  input: string;
  output: string;
  color: string;
}

export const MASTERS: Master[] = [
  {
    name: "Steve Jobs",
    role: "Visionary & Founder",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    input: "Obsessive focus on user experience and aesthetics.",
    output: "Revolutionized 4 industries: PC, Music, Phones, and Animation.",
    color: "#1C1C1C"
  },
  {
    name: "Warren Buffett",
    role: "Investing Legend",
    quote: "Risk comes from not knowing what you're doing.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    input: "Value investing and long-term capital compounding.",
    output: "Consistently one of the world's wealthiest individuals via discipline.",
    color: "#C9A14A"
  },
  {
    name: "Elon Musk",
    role: "Industrial Architect",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800",
    input: "First principles thinking applied to physical engineering.",
    output: "Transformed global aerospace and automotive industries.",
    color: "#1DB954"
  }
];

export const ECOSYSTEM: (EcosystemItem & { target: string })[] = [
  { 
    name: 'Core Platform', 
    icon: 'Globe', 
    description: 'Advanced interactive dashboard for seamless business learning.',
    target: '#curriculum' 
  },
  { 
    name: 'Billion App', 
    icon: 'Smartphone', 
    description: 'Study on the go with our intuitive iOS and Android mobile school.',
    target: '#curriculum'
  },
  { 
    name: 'Visual PGDP', 
    icon: 'Camera', 
    description: 'Daily insights and community building via our premium Instagram network.',
    target: '#instagram'
  },
  { 
    name: 'Mentorship Live', 
    icon: 'GraduationCap', 
    description: 'Direct access to industry experts in real-time strategy sessions.',
    target: '#youtube'
  },
];

export interface Module {
  id: number;
  name: string;
  level: string;
  focus: string;
  lessons: string;
  chapters: string[];
  color: string;
}

export const CURRICULUM_MODULES: Module[] = [
  {
    id: 1,
    name: "BASIC LEVEL",
    level: "Foundation",
    focus: "Financial Baseline & Market Orientation",
    lessons: "1-19",
    color: "#3B82F6",
    chapters: [
      "Capital Readiness Framework",
      "Global Market Landscape",
      "Trader & Asset Typologies",
      "Platform Enablement"
    ]
  },
  {
    id: 2,
    name: "INTERMEDIATE LEVEL",
    level: "Skill Build",
    focus: "Technical Analytics & Price Action Blueprint",
    lessons: "20-31",
    color: "#1DB954",
    chapters: [
      "Candle & Pattern Engine",
      "Option Market Mastery",
      "Support & Resistance Dynamics",
      "Multi-Timeframe Analysis"
    ]
  },
  {
    id: 3,
    name: "ADVANCED LEVEL",
    level: "Execution",
    focus: "Indicators, Setups & Journal Architecture",
    lessons: "32-34",
    color: "#C9A14A",
    chapters: [
      "Indicator Intelligence Suite",
      "Setup Classification",
      "Risk Overlay Systems",
      "Journal Optimization"
    ]
  },
  {
    id: 4,
    name: "EXPERT LEVEL",
    level: "Mastery",
    focus: "Live Execution, Optimization & Capstone",
    lessons: "35-40",
    color: "#E53935",
    chapters: [
      "Live Trading Pods",
      "Performance Review & Audit",
      "Strength Mapping",
      "Final Interview Session"
    ]
  }
];

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Entrepreneurship & Business Foundations',
    theme: 'Blueprints before profits',
    topics: [
      'What is Business?',
      'How Entrepreneurs Think',
      'Home-based & Offline Models',
      'Capital vs Skill Mastery',
      'Risk Management Fundamentals',
      'Scaling Mindset from Zero'
    ],
    visualType: 'blueprint',
    color: '#C9A14A'
  },
  {
    id: 2,
    title: 'Marketing & Sales Systems',
    theme: 'Growth through systems',
    topics: [
      'Branding Fundamentals',
      'Digital Marketing (Organic + Paid)',
      'Sales Psychology',
      'Emotional Trust-based Selling',
      'Funnel Building Strategy',
      'Ethical Persuasion'
    ],
    visualType: 'funnel',
    color: '#1DB954'
  },
  {
    id: 3,
    title: 'Trading & Investment Mastery',
    theme: 'Controlled growth, not gambling',
    topics: [
      'Indian Stock Market',
      'Forex & Crypto Dynamics',
      'Market Mechanics',
      'Risk Control Systems',
      'Emotional Discipline',
      'Capital Protection'
    ],
    visualType: 'chart',
    color: '#1C1C1C'
  }
];
