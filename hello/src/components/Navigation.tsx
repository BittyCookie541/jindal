import React, { useState } from 'react';
import { Home, FolderGit2, Code2, User, Send, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { sound } from '../utils/sound';

export type NavTab = 'home' | 'projects' | 'skills' | 'about' | 'contact';

interface NavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onSelectTab }) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Send className="w-4 h-4" /> },
  ];

  const handleTabClick = (id: NavTab) => {
    sound.playClick();
    onSelectTab(id);
  };

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="relative flex justify-center -mt-6 sm:-mt-7 z-30 px-4">
      <nav
        aria-label="Portfolio primary navigation"
        className="inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full glass-nav shadow-2xl border border-white/15"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onMouseEnter={() => sound.playHover()}
              className={`relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none ${
                isActive ? 'text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {/* Animated Sliding Active Background Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-white rounded-full shadow-lg shadow-white/10"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              <span className={`relative z-10 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`}>
                {item.icon}
              </span>
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}

        {/* Subtle Sound FX Toggle */}
        <div className="w-[1px] h-4 bg-white/10 mx-1 hidden sm:block" />
        <button
          onClick={handleToggleMute}
          title={isMuted ? 'Enable tactile sound FX' : 'Mute sound FX'}
          className="relative p-2 rounded-full text-zinc-400 hover:text-orange-400 hover:bg-white/[0.06] transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-orange-400" />}
        </button>
      </nav>
    </div>
  );
};
