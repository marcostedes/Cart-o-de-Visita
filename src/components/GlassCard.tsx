import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Logo } from './Logo';
import { ContactActions } from './ContactActions';
import { QRCodeView } from './QRCodeView';
import { Sparkles, Cpu, Layers, Bot } from 'lucide-react';

export const GlassCard: React.FC = () => {
  // 3D Mouse Parallax & Tilt calculation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const [reflectionPos, setReflectionPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setReflectionPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setReflectionPos({ x: 50, y: 50 });
  };

  const whatsappUrl = 'https://wa.me/244957459336';
  const whatsappFormatted = '+244 957 459 336';
  const email = 'codeengine2@gmail.com';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-center z-10 my-auto"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D Card Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-white/[0.01] backdrop-blur-2xl border border-white/15 p-6 sm:p-8 md:p-9 shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col items-center text-center overflow-hidden transition-shadow duration-500 hover:shadow-[0_25px_80px_rgba(6,182,212,0.2)]"
      >
        {/* Dynamic Glass Reflection Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${reflectionPos.x}% ${reflectionPos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />

        {/* Ambient Top Glow Border Line */}
        <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Brand Logo Header */}
        <div className="mb-3">
          <Logo />
        </div>

        {/* Company Title */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans"
        >
          CodeEngine
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-1.5 text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 max-w-md leading-snug"
        >
          Transformamos ideias em soluções digitais inteligentes.
        </motion.p>

        {/* Short Description */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-2.5 text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-lg font-normal"
        >
          Criamos websites, sistemas, aplicações web, automações, inteligência artificial e soluções tecnológicas sob medida para empresas que desejam crescer com tecnologia.
        </motion.p>

        {/* High-Tech Services Micro Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="my-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-300 font-mono"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-cyan-400" /> Web & Sistemas
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-1">
            <Bot className="w-3 h-3 text-blue-400" /> AI & Automação
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-1">
            <Layers className="w-3 h-3 text-indigo-400" /> Apps Sob Medida
          </span>
        </motion.div>

        {/* Primary & Secondary Action Buttons */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full my-2"
        >
          <ContactActions
            whatsappUrl={whatsappUrl}
            whatsappFormatted={whatsappFormatted}
            email={email}
          />
        </motion.div>

        {/* QR Code Quick View Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-3"
        >
          <QRCodeView url={whatsappUrl} />
        </motion.div>

        {/* Footer Brand Credit */}
        <div className="mt-4 text-[10px] font-mono tracking-widest uppercase text-slate-500/70 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-cyan-500/70" />
          <span>CodeEngine • Digital Excellence</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
