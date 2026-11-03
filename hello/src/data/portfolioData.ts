import { ProjectItem, LanguageProgress } from '../types';

export const PERSONAL_INFO = {
  name: 'Adarsh Jindal',
  title: 'AI-Assisted Developer | Digital Product Creator',
  roleBadge: 'AI-Assisted Developer',
  tagline: 'Building digital products and functional prototypes through AI-assisted workflows.',
  email: 'bittycookie541@gmail.com',
  phone: '8603493768',
  phoneDisplay: '+91 8603493768',
  linkedin: 'linkedin.com/in/adarsh-jindal-31a8a7448/',
  linkedinUrl: 'https://www.linkedin.com/in/adarsh-jindal-31a8a7448/',
  location: 'Bihar, India',
  availability: 'Open to work',
  bio: 'I build websites and digital projects with the help of modern AI tools. By pairing AI-assisted coding and debugging with visual design instincts, I turn ideas into working prototypes, modern user interfaces, and responsive web applications.',
  workflowHighlights: [
    { title: 'AI-Assisted Coding', desc: 'Accelerating frontend development and feature logic using Gemini and AI coding environments.' },
    { title: 'Rapid Prototyping', desc: 'Transforming conceptual sketches into fully interactive React and Tailwind interfaces.' },
    { title: 'Prompt Workflows', desc: 'Iterating on prompt engineering to refine UI components, state management, and debugging.' },
    { title: 'Visual Implementation', desc: 'Refining typography, glassmorphism, responsive grids, and cinematic themes.' },
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'phantom',
    name: 'PHANTOM',
    tagline: 'AI assistant interface with real-time tools and system telemetry.',
    description: 'An AI assistant interface prototype built with conversational layouts, quick actions, audio input affordances, and a dark cybernetic aesthetic.',
    image: '/assets/phantom.png',
    tags: ['AI Assistant UI', 'Gemini Integration', 'React & Tailwind', 'Dark Mode'],
    role: 'AI-Assisted Frontend Development & UI Prototyping',
    toolsUsed: ['Google AI Studio', 'Gemini API', 'React', 'Tailwind CSS', 'Vite'],
    overview: 'PHANTOM is an exploration in building a centralized AI assistant hub. The interface features a glowing quantum core center visual, voice interaction triggers, quick app launch cards, and simulated system resource monitors.',
    aiWorkflow: 'Built using AI-assisted development workflows to rapidly generate component scaffolding, structure flexible grid layouts, and connect stateful chat affordances.',
    keyFeatures: [
      'Centralized AI quantum core status display',
      'Quick action shortcuts for code, browser, and system files',
      'Integrated chat and voice interaction controls',
      'High-contrast glowing crimson dark theme'
    ],
    prototypeUrl: '#'
  },
  {
    id: 'vendora',
    name: 'VENDORA',
    tagline: 'AI-powered smart vending machine showcase and control pod.',
    description: 'A modern marketing and interactive interface concept for smart vending machines engineered with telemetry indicators and cryo cooling monitors.',
    image: '/assets/vendora.png',
    tags: ['Product Showcase', 'Interactive Pod', 'Tailwind CSS', 'Responsive Web'],
    role: 'Frontend Development & Interface Prototyping',
    toolsUsed: ['React', 'Tailwind CSS', 'AI Studio', 'Vite', 'Lucide Icons'],
    overview: 'VENDORA presents a landing page and interactive 3D/telemetry pod for automated vending machines. It showcases real-time temperature tracking, checkout speed highlights, and cloud fleet status indicators.',
    aiWorkflow: 'Developed using AI assistance to generate clean typographic layouts, responsive dual-column presentation, and custom sensor stat pill styles.',
    keyFeatures: [
      'Interactive smart pod visual and status indicators',
      'Real-time temperature and telemetry presentation',
      'Dual cryo-engine and sensor stat badges',
      'Clear call-to-action layout and modern grid alignment'
    ],
    prototypeUrl: '#'
  },
  {
    id: 'mangasaga',
    name: 'MANGASAGA',
    tagline: 'Interactive narrative cluster and saga construction engine.',
    description: 'A bold, high-contrast creative storytelling platform concept that enables creators to initialize and explore multi-chapter sagas.',
    image: '/assets/mangasaga.png',
    tags: ['Storytelling App', 'Creative Tools', 'Typography Scale', 'Dark Theme'],
    role: 'UI Implementation & AI-Assisted Architecture',
    toolsUsed: ['Google AI Studio', 'Gemini API', 'React', 'TypeScript', 'Tailwind CSS'],
    overview: 'MANGASAGA explores creative story architecture where narrative clusters can be initialized and customized. The visual identity emphasizes bold oversized typography, stark orange-on-black accents, and clean saga indexing.',
    aiWorkflow: 'Utilized AI prompts to iteratively code the chapter list layout, command header styling, and API error boundary handling.',
    keyFeatures: [
      'Bold architectural typography layout ("ARCHITECT YOUR LEGACY")',
      'Saga chapter listing with quick access triggers',
      'Integrated prompt-driven narrative initialization',
      'Minimalist dark grid background with vibrant neon orange focal points'
    ],
    prototypeUrl: '#'
  }
];

export const SKILL_ITEMS = [
  { name: 'Google AI Studio', category: 'ai' as const, iconColor: '#FF7A00' },
  { name: 'Gemini API', category: 'ai' as const, iconColor: '#60A5FA' },
  { name: 'React', category: 'framework' as const, iconColor: '#61DAFB' },
  { name: 'GitHub', category: 'tool' as const, iconColor: '#E6EDF3' },
];

// Clean Languages section with ONLY Hindi, English, and Japanese
export const LANGUAGE_PROGRESS: LanguageProgress[] = [
  { name: 'Hindi', percentage: 100 },
  { name: 'English', percentage: 90 },
  { name: 'Japanese', percentage: 0 },
];

export const AI_DEVELOPMENT_AREAS = [
  {
    title: 'AI-Assisted Website Development',
    desc: 'Translating ideas and functional requirements into clean, responsive web code with modern AI development tools.',
  },
  {
    title: 'UI Implementation & Visual Design',
    desc: 'Crafting dark-mode cinematic layouts, fluid typography, glassmorphism surfaces, and responsive grids.',
  },
  {
    title: 'Rapid Functional Prototyping',
    desc: 'Quickly turning concepts and sketches into interactive web prototypes that can be tested, shared, and evaluated.',
  },
  {
    title: 'Prompt Engineering & Workflows',
    desc: 'Experimenting with AI prompts and iterative coding workflows to solve bugs, build components, and integrate APIs.',
  }
];
