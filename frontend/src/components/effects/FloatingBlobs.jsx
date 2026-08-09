import { motion } from 'framer-motion';

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary accent blob */}
      <motion.div
        className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute top-[40%] -left-[200px] w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom accent blob */}
      <motion.div
        className="absolute -bottom-[200px] right-[20%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(16,185,129,0.2) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
