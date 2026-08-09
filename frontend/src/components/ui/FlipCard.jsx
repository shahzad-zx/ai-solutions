import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw, FiCheckCircle, FiZap } from 'react-icons/fi';

export default function FlipCard({
  icon: Icon,
  title,
  description,
  details = [],
  gradient = 'from-sky-500/20 via-purple-500/20 to-pink-500/20',
  className = '',
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative perspective-[1000px] w-full h-full min-h-[220px] group ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl bg-slate-900/80 border border-indigo-500/30 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl shadow-xl group-hover:border-sky-400/70 transition-colors duration-300"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Subtle gradient highlight */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-45 transition-opacity duration-500`} />
          
          {/* Header with Icon and Flip Hint */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:bg-sky-500/25 group-hover:text-white transition-all duration-300 shadow-lg shadow-sky-500/10">
              {Icon && <Icon size={22} />}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-slate-800/90 px-2.5 py-1 rounded-full border border-slate-700/60 group-hover:text-sky-300 group-hover:border-sky-500/40 transition-all">
              <span>Flip details</span>
              <FiRefreshCw className="text-sky-400 group-hover:rotate-180 transition-transform duration-700" size={11} />
            </div>
          </div>

          {/* Front Title & Short Description */}
          <div className="relative z-10 mt-4">
            <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-tight flex items-center justify-between">
              {title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
              {description}
            </p>
          </div>

          {/* Bottom Glowing Accent Line */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-indigo-950/95 via-slate-900/95 to-purple-950/95 border border-sky-400/70 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-2xl shadow-2xl shadow-purple-500/20"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Neon Glow Aura */}
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-sky-500/30 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-purple-500/30 blur-2xl pointer-events-none" />

          {/* Back Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-indigo-500/30 pb-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
              <FiZap className="text-purple-400 animate-pulse" size={13} />
              {title}
            </h4>
            <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-500/40">
              Active
            </span>
          </div>

          {/* Back Detail List */}
          <div className="relative z-10 space-y-2 my-2 flex-1 overflow-y-auto ar-scrollbar-hide">
            {details.length > 0 ? (
              details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                  <span>{detail}</span>
                </div>
              ))
            ) : (
              <>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                  <span>Instant zero-latency AI call execution</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                  <span>Automated 24/7 calendar availability</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-200">
                  <FiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={13} />
                  <span>Full CRM sync & real-time analytics</span>
                </div>
              </>
            )}
          </div>

          {/* Back Footer */}
          <div className="relative z-10 pt-2 border-t border-indigo-500/30 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-400">Response: <span className="text-sky-300">&lt; 300ms</span></span>
            <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-300">
              Interactive 3D Card
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
