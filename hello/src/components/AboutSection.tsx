import React from 'react';
import { User, Bot, Sparkles, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, AI_DEVELOPMENT_AREAS } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/[0.08] shadow-xl space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-orange-500/15 flex items-center justify-center text-orange-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              About Adarsh Jindal
            </h2>
            <span className="text-xs text-orange-400 font-semibold tracking-wide uppercase font-mono">
              AI-Assisted Developer & Digital Product Creator
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            sound.playClick();
            onOpenContact();
          }}
          onMouseEnter={() => sound.playHover()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold text-xs sm:text-sm shadow-md transition-all self-start sm:self-auto cursor-pointer"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Main Bio Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p className="font-light">
            I am a digital creator and developer based in <span className="text-white font-medium">Bihar, India</span> who builds websites and digital projects primarily through AI-assisted workflows.
          </p>
          <p className="font-light">
            Rather than following traditional manual coding paths alone, I leverage modern AI tools like <span className="text-orange-400 font-medium">Google AI Studio</span>, <span className="text-orange-400 font-medium">Gemini</span>, and modern coding environments to accelerate frontend development, debug layouts, and transform ideas into working web prototypes.
          </p>
          <p className="font-light">
            My focus centers on combining iterative prompt engineering with design sensibilities—crafting clean responsive user interfaces, configuring modern component libraries with React and Tailwind CSS, and bringing digital product concepts to life quickly.
          </p>
        </div>

        {/* Workflow Pillars with Motion hover */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3">
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-orange-500/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1 font-mono">
              <Bot className="w-4 h-4" />
              <span>Development Approach</span>
            </div>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Using AI tools for rapid scaffolding, feature implementation, logic assistance, and code iteration.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-orange-500/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>UI Implementation</span>
            </div>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Curating aesthetics, typography hierarchy, dark-mode themes, and smooth responsive layouts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI-Assisted Areas */}
      <div className="pt-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          What I Build & Explore
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AI_DEVELOPMENT_AREAS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-orange-500/30 transition-colors flex flex-col justify-between shadow-sm"
            >
              <div>
                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-orange-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AI-Assisted</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
