export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  toolsUsed: string[];
  overview: string;
  keyFeatures: string[];
  aiWorkflow: string;
  prototypeUrl?: string;
}

export interface SkillItem {
  name: string;
  category: 'tool' | 'framework' | 'ai';
  iconColor: string;
}

export interface LanguageProgress {
  name: string;
  percentage: number;
}
