import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Bot, Sparkles, Layers, Globe } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#141310] border border-white/10 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions bar at top */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.08] bg-black/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Profile Overview / CV</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 max-h-[78vh] overflow-y-auto space-y-8 bg-[#0f0e0c] text-zinc-200">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-orange-400 mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl font-light leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-zinc-300 font-mono bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.05] shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-orange-400" />
                <span>{PERSONAL_INFO.linkedin}</span>
              </div>
            </div>
          </div>

          {/* AI-Assisted Development Focus */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Core Development Focus
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wide">AI-Assisted Web Development</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                  Building functional websites and user interfaces primarily with the aid of AI coding assistants and modern web tooling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wide">Rapid Functional Prototyping</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                  Iterating through concept ideas and turning them into working React and Tailwind CSS application prototypes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wide">UI Implementation & Styling</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                  Translating visual concepts into responsive components, dark-mode themes, and clean layout structures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h3 className="text-xs font-bold text-white uppercase tracking-wide">Prompt Engineering Workflows</h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                  Formulating precise prompt sequences to solve code challenges, configure build systems, and debug interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Project Highlights (Truthful, No Metrics) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PROJECTS.map((project) => (
                <div key={project.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-bold text-white text-xs block">{project.name}</span>
                  <span className="text-[11px] text-zinc-400 block mt-1 font-light leading-relaxed">{project.tagline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-orange-400" />
                Tools & Technologies
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Google AI Studio · Gemini API · React · Tailwind CSS · Vite · GitHub · TypeScript · HTML/CSS
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                Languages
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Hindi (100%) · English (90%) · Japanese (0%)
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
