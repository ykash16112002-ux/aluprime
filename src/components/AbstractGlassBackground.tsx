import React from 'react';

/**
 * Ambient architectural glass background:
 * Light refractions, glass caustics, and smooth geometric lines matching the reference aesthetic.
 */
export const AbstractGlassBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base architectural stone canvas tone */}
      <div className="absolute inset-0 bg-[#F9F9F8]" />

      {/* Subtle architectural grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.35]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Soft warm glass glow top right (matching sunlit spiral glass in reference) */}
      <div 
        className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(245, 238, 226, 0.9) 0%, rgba(235, 230, 220, 0.4) 60%, transparent 100%)',
        }}
      />

      {/* Gentle cool sky glass caustics top left */}
      <div 
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(220, 230, 240, 0.6) 0%, rgba(230, 235, 242, 0.2) 70%, transparent 100%)',
        }}
      />

      {/* Architectural glass curved geometry SVG watermark */}
      <svg
        className="absolute top-0 right-0 w-[55vw] max-w-[900px] h-auto opacity-[0.14] text-neutral-800"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="200" r="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="500" cy="200" r="460" stroke="currentColor" strokeWidth="1.2" />
        <path d="M120 700 C 300 500, 520 400, 800 360" stroke="currentColor" strokeWidth="1.5" />
        <path d="M180 760 C 340 580, 560 480, 800 450" stroke="currentColor" strokeWidth="0.8" />
        <line x1="500" y1="0" x2="500" y2="800" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 6" />
        <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 6" />
      </svg>

      {/* Bottom ambient reflection */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[800px] h-[500px] rounded-full blur-[150px] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(240, 238, 232, 0.8) 0%, transparent 80%)',
        }}
      />
    </div>
  );
};
