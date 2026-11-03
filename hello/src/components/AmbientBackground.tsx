import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const AmbientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* 1. Global Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-600 via-[#ff7a00] to-amber-300 origin-left z-[9990] shadow-[0_0_12px_rgba(255,122,0,0.8)]"
        style={{ scaleX }}
      />

      {/* 2. Ambient Lighting & Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle geometric dot grid with radial fade */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)',
          }}
        />

        {/* Primary Warm Orange Orb (top right - breathing) */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
            opacity: [0.22, 0.32, 0.22],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-orange-600/30 blur-[130px] rounded-full"
        />

        {/* Secondary Amber Spotlight (mid-left floating) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
            y: [0, 40, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 -left-40 w-[550px] h-[550px] bg-amber-600/20 blur-[140px] rounded-full"
        />

        {/* Deep Crimson/Orange Core (bottom center) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute -bottom-40 right-1/4 w-[700px] h-[450px] bg-orange-700/20 blur-[150px] rounded-full"
        />

        {/* Ambient floating dust embers */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-orange-400/30"
              style={{
                left: `${(i * 19) % 100}%`,
                top: `${(i * 27) % 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 6 + (i % 5) * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
