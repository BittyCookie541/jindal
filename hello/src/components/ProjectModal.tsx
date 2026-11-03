import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Bot, Layers, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { sound } from '../utils/sound';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sound.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#12110f] border border-white/10 shadow-2xl overflow-hidden my-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/[0.08] bg-black/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                Project Overview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.name}
              </h3>
            </div>
            
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => sound.playHover()}
              className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Main Screenshot Frame with Interactive Zoom Toggle */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-2xl group">
              <img
                src={project.image}
                alt={`${project.name} actual screenshot`}
                className={`w-full transition-all duration-300 mx-auto ${
                  isZoomed
                    ? 'h-auto max-h-[700px] object-contain cursor-zoom-out'
                    : 'h-auto max-h-[420px] object-contain cursor-zoom-in'
                }`}
                onClick={() => {
                  sound.playClick();
                  setIsZoomed(!isZoomed);
                }}
                referrerPolicy="no-referrer"
              />

              {/* Zoom overlay trigger */}
              <button
                onClick={() => {
                  sound.playClick();
                  setIsZoomed(!isZoomed);
                }}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-orange-400 transition-colors cursor-pointer shadow-lg"
                title={isZoomed ? 'Reset zoom' : 'Expand full view'}
              >
                {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 block font-mono">Role</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">{project.role}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 block font-mono">Development Style</span>
                <span className="text-xs sm:text-sm font-semibold text-orange-400">AI-Assisted Workflow</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-2">
                Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* AI Workflow & Implementation */}
            <div className="p-4 rounded-xl bg-orange-500/[0.06] border border-orange-500/20">
              <h5 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                AI-Assisted Development Workflow
              </h5>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {project.aiWorkflow}
              </p>
            </div>

            {/* Tools Actually Used */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-orange-400" />
                Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs text-zinc-300 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Action Footer - NO GitHub button */}
          <div className="p-5 border-t border-white/[0.08] bg-black/50 backdrop-blur-md flex items-center justify-between">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Projects
            </button>
            
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Close Overview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
