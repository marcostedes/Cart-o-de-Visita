import React from 'react';

export const BackgroundGlows: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep dark base overlay */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Top Left Electric Blue Radial Glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(59, 130, 246, 0) 70%)',
        }}
      />

      {/* Center Cyan Spark Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full opacity-20 blur-[150px] animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(0,0,0,0) 80%)',
          animationDuration: '8s',
        }}
      />

      {/* Bottom Right Deep Violet/Neon Accent Glow */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(59, 130, 246, 0) 70%)',
        }}
      />

      {/* Subtle vignette border frame */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(3,4,7,0.85)_100%)] pointer-events-none" />
    </div>
  );
};
