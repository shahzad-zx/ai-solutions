import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MovingGradientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Cyber Space Canvas */}
      <div className="absolute inset-0 bg-[#070B14]" />

      {/* Dynamic Animated Ambient Mesh Backdrop */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 10% 15%, rgba(56, 189, 248, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 85% 25%, rgba(168, 85, 247, 0.28) 0%, transparent 45%),
            radial-gradient(circle at 50% 75%, rgba(244, 114, 182, 0.22) 0%, transparent 50%),
            radial-gradient(circle at 75% 85%, rgba(52, 211, 153, 0.18) 0%, transparent 45%)
          `
        }}
      />

      {/* Primary Electric Sky Cyan Blob */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-75 filter blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(99, 102, 241, 0.25) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Radiant Cyber Violet / Magenta Blob */}
      <motion.div
        className="absolute top-[20%] -right-[10%] w-[750px] h-[750px] rounded-full opacity-70 filter blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.42) 0%, rgba(236, 72, 153, 0.25) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, -80, 60, 0] + mousePos.x,
          y: [0, 70, -50, 0] + mousePos.y,
          scale: [1, 0.88, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Emerald & Neon Blue Fluid Blob */}
      <motion.div
        className="absolute top-[55%] left-[15%] w-[650px] h-[650px] rounded-full opacity-65 filter blur-[95px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(56, 189, 248, 0.25) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, 60, -70, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Interactive Floating Mouse Light Aura */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full opacity-50 filter blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.35) 0%, rgba(192, 132, 252, 0.2) 50%, transparent 75%)',
        }}
        animate={{
          x: mousePos.x * 2.5,
          y: mousePos.y * 2.5,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 80,
        }}
      />

      {/* Futuristic Mesh Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(129, 140, 248, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(129, 140, 248, 0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
}
