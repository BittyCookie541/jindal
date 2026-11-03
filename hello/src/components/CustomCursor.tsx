import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'card' | 'text'>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for cursor follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Inspect target to determine cursor state
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [role="button"], input, select, textarea, .cursor-pointer');
      const card = target.closest('[data-cursor="card"], .group\\/card, .interactive-card');
      const isInputText = target.closest('input[type="text"], input[type="email"], textarea');

      if (card) {
        setCursorState('card');
        setCursorText('VIEW');
      } else if (isInputText) {
        setCursorState('text');
        setCursorText('');
      } else if (interactive) {
        setCursorState('hover');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* 1. Precision Center Dot (instant response) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.7 : cursorState === 'hover' ? 1.5 : cursorState === 'card' ? 0.5 : 1,
          opacity: cursorState === 'text' ? 0.4 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#ff8a1a] shadow-[0_0_10px_#ff7a00]" />
      </motion.div>

      {/* 2. Interactive Smooth Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorState === 'card'
              ? 64
              : cursorState === 'hover'
              ? 48
              : cursorState === 'text'
              ? 24
              : 32,
          height:
            cursorState === 'card'
              ? 64
              : cursorState === 'hover'
              ? 48
              : cursorState === 'text'
              ? 36
              : 32,
          backgroundColor:
            cursorState === 'card'
              ? 'rgba(255, 122, 0, 0.18)'
              : cursorState === 'hover'
              ? 'rgba(255, 122, 0, 0.12)'
              : 'rgba(255, 122, 0, 0.02)',
          borderColor:
            cursorState === 'card'
              ? 'rgba(255, 140, 26, 0.8)'
              : cursorState === 'hover'
              ? 'rgba(255, 140, 26, 0.6)'
              : 'rgba(255, 140, 26, 0.25)',
          scale: isClicking ? 0.85 : 1,
          borderRadius: cursorState === 'text' ? '4px' : '9999px',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.4,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-black tracking-widest text-orange-300 font-mono select-none drop-shadow-[0_0_6px_rgba(255,122,0,0.8)]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
