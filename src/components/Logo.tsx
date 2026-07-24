import React from 'react';
import { motion } from 'motion/react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Animated Glowing Logo Mark */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative group cursor-pointer mb-3"
      >
        {/* Glow halo under logo */}
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/40 to-indigo-500/30 opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500" />

        {/* Outer glass box */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 p-2 shadow-2xl flex items-center justify-center overflow-hidden">
          {/* Inner sheen line animation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-300/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {/* SVG CodeEngine Official Logo Emblem */}
          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#080d1a]/90 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors p-1.5">
            <svg
              viewBox="0 0 300 300"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Blue Steel Gradient for Main Emblem */}
                <linearGradient id="metal_main" x1="20" y1="20" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="30%" stopColor="#38bdf8" />
                  <stop offset="65%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Bright Edge Bevel Highlight */}
                <linearGradient id="metal_bevel" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="40%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* Circuit Node Glowing Fill */}
                <radialGradient id="node_glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="70%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </radialGradient>

                {/* Drop shadow filter */}
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.8" />
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#38bdf8" floodOpacity="0.3" />
                </filter>
              </defs>

              <g filter="url(#shadow)">
                {/* Outer Hexagon Frame */}
                <path
                  d="
                    M 150 18
                    L 272 82
                    L 272 108
                    L 252 108
                    L 252 92
                    L 150 38
                    L 48 92
                    L 48 208
                    L 150 262
                    L 252 208
                    L 252 192
                    L 272 192
                    L 272 218
                    L 150 282
                    L 28 218
                    L 28 82
                    Z
                  "
                  fill="url(#metal_main)"
                  stroke="url(#metal_bevel)"
                  strokeWidth="1.5"
                />

                {/* Left 'C' Bracket */}
                <path
                  d="
                    M 134 82
                    L 64 118
                    L 64 182
                    L 134 218
                    L 134 196
                    L 82 170
                    L 82 130
                    L 134 104
                    Z
                  "
                  fill="url(#metal_main)"
                  stroke="url(#metal_bevel)"
                  strokeWidth="1.5"
                />

                {/* Central Numeral '1' */}
                <path
                  d="
                    M 132 108
                    L 156 82
                    L 165 82
                    L 165 214
                    L 182 214
                    L 182 230
                    L 138 230
                    L 138 214
                    L 150 214
                    L 150 102
                    L 132 116
                    Z
                  "
                  fill="url(#metal_main)"
                  stroke="url(#metal_bevel)"
                  strokeWidth="1.5"
                />

                {/* Right Circuit Line 1 (Top) with Terminal Ring */}
                <path
                  d="M 175 116 L 242 116"
                  stroke="url(#metal_main)"
                  strokeWidth="15"
                  strokeLinecap="butt"
                />
                <circle cx="255" cy="116" r="14" fill="url(#metal_main)" stroke="url(#metal_bevel)" strokeWidth="1.5" />
                <circle cx="255" cy="116" r="6" fill="#080d1a" stroke="url(#metal_bevel)" strokeWidth="1" />

                {/* Right Circuit Line 2 (Middle) with Terminal Ring */}
                <path
                  d="M 175 150 L 242 150"
                  stroke="url(#metal_main)"
                  strokeWidth="15"
                  strokeLinecap="butt"
                />
                <circle cx="255" cy="150" r="14" fill="url(#metal_main)" stroke="url(#metal_bevel)" strokeWidth="1.5" />
                <circle cx="255" cy="150" r="6" fill="#080d1a" stroke="url(#metal_bevel)" strokeWidth="1" />

                {/* Right Circuit Line 3 (Bottom) with Terminal Ring */}
                <path
                  d="M 175 184 L 242 184"
                  stroke="url(#metal_main)"
                  strokeWidth="15"
                  strokeLinecap="butt"
                />
                <circle cx="255" cy="184" r="14" fill="url(#metal_main)" stroke="url(#metal_bevel)" strokeWidth="1.5" />
                <circle cx="255" cy="184" r="6" fill="#080d1a" stroke="url(#metal_bevel)" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Available for Projects Badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md text-[11px] font-medium tracking-wide text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <span>Disponível para Novos Projectos</span>
      </motion.div>
    </div>
  );
};
