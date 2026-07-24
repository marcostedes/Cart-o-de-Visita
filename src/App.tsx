import React from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { BackgroundGlows } from './components/BackgroundGlows';
import { GlassCard } from './components/GlassCard';

export default function App() {
  return (
    <main className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden bg-[#06070a] text-slate-100 flex flex-col items-center justify-center p-3 sm:p-6 font-sans antialiased">
      {/* Interactive Canvas API Floating Particles */}
      <ParticleCanvas />

      {/* Volumetric Radial Glows & Cinematic Lights */}
      <BackgroundGlows />

      {/* Main Single-Screen Centered Glassmorphism Card */}
      <GlassCard />
    </main>
  );
}
