import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation, NavTab } from './components/Navigation';
import { SkillsCard } from './components/SkillsCard';
import { ProjectsCard } from './components/ProjectsCard';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AssetVerificationBadge, AssetVerificationModal } from './components/AssetVerificationBadge';
import { CustomCursor } from './components/CustomCursor';
import { AmbientBackground } from './components/AmbientBackground';
import { ProjectItem } from './types';
import { PROJECTS, PERSONAL_INFO } from './data/portfolioData';
import { sound } from './utils/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  // ScrollSpy to automatically reflect active section in the navigation dock
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 260;
      const sections: { id: NavTab; offsetTop: number }[] = [];

      (['home', 'projects', 'skills', 'about', 'contact'] as NavTab[]).forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          sections.push({ id, offsetTop: el.offsetTop });
        }
      });

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabSelect = (tab: NavTab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      const yOffset = -30;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-zinc-100 selection:bg-orange-500 selection:text-black relative overflow-x-hidden font-sans">
      
      {/* 1. Custom Interactive Cursor (Desktop Only) */}
      <CustomCursor />

      {/* 2. Ambient Visual Effects & Scroll Progress Bar */}
      <AmbientBackground />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
        
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => handleTabSelect('contact')}
        />

        {/* 2. Floating Navigation Dock */}
        <Navigation
          activeTab={activeTab}
          onSelectTab={handleTabSelect}
        />

        {/* 3. Primary Dashboard Grid (Skills on Left, Projects on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Skills Card */}
          <div className="lg:col-span-5 h-full">
            <SkillsCard />
          </div>

          {/* Right Column: Projects Card (PHANTOM, VENDORA, MANGASAGA) */}
          <div className="lg:col-span-7 h-full">
            <ProjectsCard
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAll={() => setSelectedProject(PROJECTS[0])}
            />
          </div>

        </div>

        {/* 4. Detailed About Section */}
        <AboutSection
          onOpenContact={() => handleTabSelect('contact')}
        />

        {/* 5. Direct Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="pt-10 pb-16 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="font-medium text-zinc-400">{PERSONAL_INFO.name}</span>
            <span>—</span>
            <span>{PERSONAL_INFO.title}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                sound.playClick();
                handleTabSelect('home');
              }}
              onMouseEnter={() => sound.playHover()}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Back to Top
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setIsVerificationOpen(true);
              }}
              onMouseEnter={() => sound.playHover()}
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer font-medium"
            >
              Verified Original Assets
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => sound.playHover()}
              className="hover:text-zinc-300 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </footer>

      </main>

      {/* Floating Original Asset Verification Badge */}
      <AssetVerificationBadge onOpenModal={() => setIsVerificationOpen(true)} />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Asset Integrity Verification Modal */}
      <AssetVerificationModal
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
      />

    </div>
  );
}
