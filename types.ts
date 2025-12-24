
export interface Phase {
  id: number;
  title: string;
  theme: string;
  topics: string[];
  visualType: 'blueprint' | 'funnel' | 'chart';
  color: string;
}

export interface EcosystemItem {
  name: string;
  icon: string;
  description: string;
}
