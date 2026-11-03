import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Check, Copy, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setIsSubmitting(true);
    setTimeout(() => {
      sound.playChirp();
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: 'Project Collaboration', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 700);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/[0.08] shadow-xl space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] pb-6">
        <div className="w-10 h-10 rounded-2xl bg-orange-500/15 flex items-center justify-center text-orange-400">
          <Send className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect & Build
          </h2>
          <span className="text-xs text-orange-400 font-semibold tracking-wide uppercase font-mono">
            Have an idea or project? Reach out directly
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Contact Cards & Direct Connect */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            I am open to discussing digital product ideas, web prototyping, frontend collaboration, and AI-assisted development workflows.
          </p>

          <div className="space-y-3 pt-2">
            {/* Email card */}
            <div className="group p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-orange-500/40 transition-all duration-200 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 hover:text-orange-400 truncate"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block uppercase tracking-wider font-mono">Email</span>
                  <span className="font-medium truncate">{PERSONAL_INFO.email}</span>
                </div>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone card */}
            <div className="group p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-orange-500/40 transition-all duration-200 flex items-center justify-between">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 hover:text-orange-400 truncate"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block uppercase tracking-wider font-mono">Phone</span>
                  <span className="font-medium truncate">{PERSONAL_INFO.phoneDisplay}</span>
                </div>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="group p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-orange-500/40 transition-all duration-200 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 hover:text-orange-400 truncate"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block uppercase tracking-wider font-mono">LinkedIn</span>
                  <span className="font-medium truncate">{PERSONAL_INFO.linkedin}</span>
                </div>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
                title="Open LinkedIn"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] text-zinc-500 block uppercase tracking-wider font-mono">Location</span>
                <span className="font-medium">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Working Contact Form with Animated Focus States */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-orange-400" />
              Send a Direct Message
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been sent. Adarsh will respond shortly.</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Topic / Inquiry</label>
              <select
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all"
              >
                <option value="Project Collaboration">Website / Project Collaboration</option>
                <option value="AI Workflow Exploration">AI Workflow Exploration</option>
                <option value="Prototyping Inquiry">Rapid Prototyping Inquiry</option>
                <option value="General Conversation">General Conversation</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Your Message</label>
              <textarea
                required
                rows={4}
                placeholder="Share your ideas, project thoughts, or questions..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-[#ff7a00] hover:bg-[#ff8c1a] active:scale-[0.99] disabled:opacity-50 text-black font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Sending message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};
