import React, { useState } from 'react';
import { Download, Mail, Linkedin, Phone, MapPin, Check, Copy, Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-3xl overflow-hidden glass-panel border border-white/[0.08] shadow-2xl"
    >
      {/* Background warm orange radial glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-600/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-700/15 blur-3xl" />

      {/* Hero content container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] md:min-h-[540px]">
        
        {/* Left Column: Typography, Badges, and Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between z-20">
          
          {/* Top Row: Open to Work Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs font-medium text-zinc-300 tracking-wide">
                {PERSONAL_INFO.availability}
              </span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs shadow-sm">
              <Bot className="w-3.5 h-3.5" />
              <span>AI-Assisted Workflow</span>
            </div>
          </motion.div>

          {/* Core Headline Block with Staggered Entrance */}
          <div className="my-auto py-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-sm md:text-base font-semibold tracking-wider text-[#ff8a1a] uppercase mb-2 block font-mono"
            >
              {PERSONAL_INFO.title}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none select-none"
            >
              Adarsh<br />
              <span className="inline-flex items-center gap-3">
                Jindal
                {/* Rhythmic blinking neon orange cursor bar */}
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block w-8 sm:w-12 h-1.5 sm:h-2 bg-[#ff7a00] rounded-sm transform translate-y-1 shadow-[0_0_12px_#ff7a00]"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-4 text-zinc-300 text-base md:text-lg max-w-lg font-light leading-relaxed"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>
          </div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300"
          >
            {/* Email */}
            <div className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-orange-500/30 transition-all duration-200">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2.5 truncate text-zinc-300 hover:text-white"
                title="Send email"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1.5 text-zinc-500 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-orange-500/30 transition-all duration-200">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2.5 truncate text-zinc-300 hover:text-white"
                title="Open LinkedIn profile"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{PERSONAL_INFO.linkedin}</span>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.linkedinUrl, 'linkedin')}
                className="p-1.5 text-zinc-500 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Copy LinkedIn link"
              >
                {copiedItem === 'linkedin' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] hover:border-orange-500/30 transition-all duration-200">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-2.5 truncate text-zinc-300 hover:text-white"
                title="Call phone"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{PERSONAL_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 text-zinc-500 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-zinc-300">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="truncate font-light">{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Original Uploaded Portrait Blended with Multi-layered CSS Gradients */}
        <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[420px] lg:min-h-full flex items-end justify-center overflow-hidden">
          
          {/* Download CV button with interactive glow & shimmer */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={() => sound.playHover()}
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-[#ff7a00] hover:bg-[#ff8c1a] text-black font-bold text-sm shadow-lg shadow-orange-500/30 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              {/* Shimmer light sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <span className="relative z-10">Download CV</span>
              <Download className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </motion.button>
          </div>

          {/* Behind-portrait warm intense orange rim aura with subtle breathing scale */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute inset-0 z-0 bg-radial from-orange-500/50 via-orange-600/20 to-transparent blur-3xl transform scale-110"
          />

          {/* The Exact Uploaded Portrait Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full h-full flex items-end justify-center z-10"
          >
            <img
              src="/assets/portrait.png"
              alt="Adarsh Jindal - Portrait"
              className="w-full h-full max-h-[580px] object-cover object-center filter contrast-[1.04] brightness-95"
              referrerPolicy="no-referrer"
            />

            {/* CSS Gradient Blending Overlays - Preserves original pixels while blending seamlessly */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-[#0c0b0a] via-[#0c0b0a]/75 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/85 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0c0b0a]/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0c0b0a]/40 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-radial from-orange-500/10 via-transparent to-transparent mix-blend-screen" />
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};
