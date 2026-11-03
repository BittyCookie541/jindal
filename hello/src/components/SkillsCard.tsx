import React from 'react';
import { Bot, Sparkles, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { LANGUAGE_PROGRESS } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const SkillsCard: React.FC = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="h-full rounded-3xl glass-panel p-6 sm:p-7 border border-white/[0.08] shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400">
              <Bot className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Tools & Stack</h2>
          </div>
          <span className="text-xs text-orange-400/80 font-mono">AI Workflows</span>
        </div>

        {/* Tech Stack Icons: Google AI Studio, Gemini API, React, GitHub */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 py-2">
          {/* Google AI Studio */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => sound.playHover()}
            className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-orange-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-orange-500/10"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 fill-orange-400/40" />
            </div>
            <span className="text-xs font-medium text-zinc-300 text-center leading-tight">AI Studio</span>
          </motion.div>

          {/* Gemini API */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => sound.playHover()}
            className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-blue-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-blue-500/10"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-zinc-300 text-center leading-tight">Gemini</span>
          </motion.div>

          {/* React */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => sound.playHover()}
            className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-cyan-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-cyan-500/10"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2" />
                <path d="M12 4c5 0 9 3.58 9 8s-4 8-9 8-9-3.58-9-8 4-8 9-8z" transform="rotate(30 12 12)" />
                <path d="M12 4c5 0 9 3.58 9 8s-4 8-9 8-9-3.58-9-8 4-8 9-8z" transform="rotate(90 12 12)" />
                <path d="M12 4c5 0 9 3.58 9 8s-4 8-9 8-9-3.58-9-8 4-8 9-8z" transform="rotate(150 12 12)" />
              </svg>
            </div>
            <span className="text-xs font-medium text-zinc-300 text-center leading-tight">React</span>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => sound.playHover()}
            className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.04] hover:border-purple-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-purple-500/10"
          >
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-300 mb-2 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-zinc-300 text-center leading-tight">GitHub</span>
          </motion.div>
        </div>
      </div>

      {/* Clean Languages Section (ONLY Hindi, English, Japanese) with Animated Fill */}
      <div className="mt-6 pt-5 border-t border-white/[0.06]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Languages
            </span>
          </div>
          <span className="text-xs text-orange-400 font-mono">Proficiency</span>
        </div>

        <div className="space-y-3.5">
          {LANGUAGE_PROGRESS.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-200 font-medium">{item.name}</span>
                <span className="text-zinc-400 font-mono tabular-nums">{item.percentage}%</span>
              </div>
              <div className="relative h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.15 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full bg-gradient-to-r from-orange-600 via-[#ff7a00] to-amber-300 rounded-full shadow-[0_0_10px_rgba(255,122,0,0.6)]"
                >
                  {/* Subtle Shimmer highlight */}
                  {item.percentage > 0 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
