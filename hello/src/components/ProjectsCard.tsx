import React from 'react';
import { LayoutGrid, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TiltCard } from './TiltCard';
import { sound } from '../utils/sound';

interface ProjectsCardProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAll: () => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onSelectProject, onViewAll }) => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-full rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.08] shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Projects</h2>
          </div>
          
          <button
            onClick={() => {
              sound.playClick();
              onViewAll();
            }}
            onMouseEnter={() => sound.playHover()}
            className="group flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Project Cards Grid with 3D Tilt & Glass Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((project, index) => (
            <TiltCard
              key={project.id}
              onClick={() => {
                sound.playClick();
                onSelectProject(project);
              }}
              className="cursor-pointer rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-orange-500/50 p-3.5 transition-colors duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 hover:shadow-orange-500/10"
            >
              <div data-cursor="card">
                {/* Actual Project Screenshot with subtle image zoom */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/[0.08] mb-3.5">
                  <img
                    src={project.image}
                    alt={`${project.name} Screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out filter brightness-95 group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Sheen & dark gradient overlays */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono">
                    AI Prototype
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors uppercase flex items-center gap-1.5">
                    <span>{project.name}</span>
                    <Sparkles className="w-3 h-3 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed font-light">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* View Details Action (NO GitHub buttons) */}
              <div className="mt-4 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                <span className="flex items-center gap-1">
                  View Project
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
                <Eye className="w-3.5 h-3.5 text-zinc-500 group-hover:text-orange-400 transition-colors" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span>Interactive interface previews & AI workflows</span>
        </span>
        <span className="font-mono text-zinc-600">3 projects</span>
      </div>
    </motion.div>
  );
};
