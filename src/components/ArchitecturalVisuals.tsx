import React from 'react';

/**
 * High-fidelity, self-contained architectural visuals representing
 * luxury glazing, panoramic portals, and precision engineering.
 */

export const HeroGlazingVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#EAE6DF] via-[#F2EFE9] to-[#DFD9CE] shadow-2xl ${className}`}>
      {/* Sunlight glow through glass */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-amber-100/60 via-amber-50/20 to-transparent blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 700 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFE7EC" />
            <stop offset="50%" stopColor="#EDEAE1" />
            <stop offset="100%" stopColor="#F5F3EC" />
          </linearGradient>

          <linearGradient id="glassReflection" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E2EAF0" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="warmSunlight" x1="0" y1="0" x2="1" y2="0.8">
            <stop offset="0%" stopColor="#FFF9E8" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F5EDE0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ECE3D4" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="aluminumProfile" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E2024" />
            <stop offset="50%" stopColor="#32363F" />
            <stop offset="100%" stopColor="#181A1E" />
          </linearGradient>

          <linearGradient id="stoneFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9D4CB" />
            <stop offset="100%" stopColor="#C4BEB3" />
          </linearGradient>

          <filter id="glassBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Outdoor Sky & Nature Vista through glass */}
        <rect x="0" y="0" width="700" height="640" fill="url(#skyGrad)" />

        {/* Distant minimalist pine trees silhouette seen through glass */}
        <g opacity="0.45">
          <path d="M 60 480 L 95 340 L 130 480 Z" fill="#889691" />
          <path d="M 110 490 L 150 310 L 190 490 Z" fill="#788882" />
          <path d="M 180 500 L 225 360 L 270 500 Z" fill="#919F9A" />
          <path d="M 440 480 L 485 320 L 530 480 Z" fill="#7D8D88" />
          <path d="M 510 490 L 560 290 L 610 490 Z" fill="#6F807A" />
          <path d="M 590 510 L 640 350 L 690 510 Z" fill="#82948E" />
        </g>

        {/* Architectural Terrace / Pool outside */}
        <rect x="0" y="470" width="700" height="70" fill="#CBD5DC" opacity="0.6" />
        <line x1="0" y1="520" x2="700" y2="520" stroke="#B8C4CC" strokeWidth="2" />

        {/* Polished Travertine Interior Floor */}
        <path d="M 0 540 L 700 540 L 700 860 L 0 860 Z" fill="url(#stoneFloor)" />

        {/* Sunlight cast on floor - geometric architectural light shaft */}
        <polygon points="120,540 460,540 680,860 200,860" fill="url(#warmSunlight)" />
        <polygon points="260,540 580,540 700,760 380,860" fill="#FFFBEF" opacity="0.3" />

        {/* Main Architectural Glass Structure - Sweeping curved facade matching reference staircase vibe */}
        <g id="glassPanels">
          {/* Glass Pane 1 */}
          <path d="M 0 20 L 210 50 L 210 540 L 0 540 Z" fill="url(#glassReflection)" />
          {/* Glass Pane 2 (Center wide) */}
          <path d="M 218 50 L 460 70 L 460 540 L 218 540 Z" fill="url(#glassReflection)" />
          {/* Glass Pane 3 (Right curved aspect) */}
          <path d="M 468 70 L 700 40 L 700 540 L 468 540 Z" fill="url(#glassReflection)" />
        </g>

        {/* Modern Minimalist Curved Staircase & Interior Wall in foreground/midground */}
        <g id="architecturalInterior">
          {/* Gentle curved ceiling soffit */}
          <path d="M 0 0 L 700 0 L 700 90 C 500 130, 250 80, 0 60 Z" fill="#ECE8DF" />
          <path d="M 0 60 C 250 80, 500 130, 700 90" stroke="#181A1E" strokeWidth="3" />

          {/* Recessed ceiling LED profile */}
          <path d="M 40 45 C 260 65, 480 110, 660 75" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />

          {/* Sweeping sculptural staircase handrail & balustrade (like the reference aesthetic!) */}
          <path
            d="M 680 180 C 620 280, 500 420, 390 560 C 330 640, 240 720, 100 820"
            stroke="url(#aluminumProfile)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Glass balustrade curve with refraction */}
          <path
            d="M 680 200 C 620 300, 500 440, 390 580 C 330 660, 240 740, 100 840"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="28"
            strokeLinecap="round"
          />
          <path
            d="M 680 200 C 620 300, 500 440, 390 580 C 330 660, 240 740, 100 840"
            stroke="#1E2024"
            strokeWidth="2"
            strokeDasharray="18 18"
          />

          {/* Stair treads floating in space */}
          <g opacity="0.85">
            <line x1="430" y1="520" x2="520" y2="520" stroke="#3D3A36" strokeWidth="8" strokeLinecap="round" />
            <line x1="390" y1="560" x2="480" y2="560" stroke="#3D3A36" strokeWidth="8" strokeLinecap="round" />
            <line x1="340" y1="600" x2="440" y2="600" stroke="#3D3A36" strokeWidth="8" strokeLinecap="round" />
            <line x1="290" y1="645" x2="400" y2="645" stroke="#3D3A36" strokeWidth="9" strokeLinecap="round" />
            <line x1="230" y1="695" x2="350" y2="695" stroke="#3D3A36" strokeWidth="10" strokeLinecap="round" />
            <line x1="170" y1="750" x2="300" y2="750" stroke="#3D3A36" strokeWidth="11" strokeLinecap="round" />
            <line x1="100" y1="810" x2="240" y2="810" stroke="#3D3A36" strokeWidth="12" strokeLinecap="round" />
          </g>
        </g>

        {/* Structural Slim Aluminum Mullions (Schüco style 21mm) */}
        <g stroke="url(#aluminumProfile)">
          {/* Vertical mullion 1 */}
          <line x1="214" y1="50" x2="214" y2="540" strokeWidth="6" />
          {/* Vertical mullion 2 */}
          <line x1="464" y1="70" x2="464" y2="540" strokeWidth="6" />
          {/* Zero-level floor track flush with floor */}
          <line x1="0" y1="540" x2="700" y2="540" strokeWidth="8" />
          <line x1="0" y1="542" x2="700" y2="542" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* Diagonal Light Caustics / Prismatic Glares across glass */}
        <polygon points="180,60 260,60 120,530 40,530" fill="url(#glassReflection)" opacity="0.5" />
        <polygon points="420,70 500,70 360,530 280,530" fill="url(#glassReflection)" opacity="0.4" />
        <polygon points="610,60 670,50 540,530 480,530" fill="url(#glassReflection)" opacity="0.3" />

        {/* Glass edge highlight sheen */}
        <line x1="215" y1="50" x2="215" y2="540" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
        <line x1="465" y1="70" x2="465" y2="540" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
};

export const CategoryIllustration: React.FC<{
  type: 'panoramic' | 'storefront' | 'frameless' | 'balcony';
  className?: string;
}> = ({ type, className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#ECE8E1] ${className}`}>
      {type === 'panoramic' && (
        <svg viewBox="0 0 400 520" fill="none" className="w-full h-full object-cover">
          <rect width="400" height="520" fill="#E8EDF2" />
          {/* Nature outside */}
          <circle cx="200" cy="220" r="160" fill="#D2DFD8" opacity="0.7" />
          <path d="M 40 340 L 100 180 L 160 340 Z" fill="#8EA399" />
          <path d="M 130 350 L 190 150 L 250 350 Z" fill="#758C81" />
          <path d="M 240 360 L 310 190 L 380 360 Z" fill="#889E94" />
          {/* Floor & reflections */}
          <rect x="0" y="340" width="400" height="180" fill="#D8D2C6" />
          <polygon points="60,340 240,340 340,520 160,520" fill="#FFF9ED" opacity="0.6" />
          {/* Large sliding portal frame */}
          <rect x="15" y="40" width="370" height="300" stroke="#1D2026" strokeWidth="8" fill="none" rx="4" />
          <line x1="200" y1="40" x2="200" y2="340" stroke="#1D2026" strokeWidth="6" />
          {/* Glass glare */}
          <polygon points="50,45 130,45 70,335 -10,335" fill="#FFFFFF" opacity="0.35" />
          <polygon points="220,45 300,45 240,335 160,335" fill="#FFFFFF" opacity="0.3" />
          {/* Handle */}
          <line x1="188" y1="180" x2="188" y2="240" stroke="#111" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}

      {type === 'storefront' && (
        <svg viewBox="0 0 400 520" fill="none" className="w-full h-full object-cover">
          <rect width="400" height="520" fill="#1C1E24" />
          {/* Interior boutique glow */}
          <circle cx="200" cy="210" r="140" fill="#F4E9D5" opacity="0.25" filter="blur(30px)" />
          {/* Designer display podium */}
          <polygon points="120,380 280,380 320,440 80,440" fill="#2E323D" />
          <rect x="170" y="270" width="60" height="110" fill="#EADCC7" rx="6" />
          <circle cx="200" cy="230" r="22" stroke="#DFCFB7" strokeWidth="3" />
          {/* Storefront ceiling spotlights */}
          <circle cx="120" cy="60" r="10" fill="#FFE8BF" />
          <polygon points="120,60 80,280 180,280" fill="#FFE8BF" opacity="0.12" />
          <circle cx="280" cy="60" r="10" fill="#FFE8BF" />
          <polygon points="280,60 220,280 340,280" fill="#FFE8BF" opacity="0.12" />
          {/* Structural glass seams */}
          <line x1="20" y1="30" x2="380" y2="30" stroke="#505663" strokeWidth="2" />
          <line x1="20" y1="30" x2="20" y2="480" stroke="#505663" strokeWidth="2" />
          <line x1="380" y1="30" x2="380" y2="480" stroke="#505663" strokeWidth="2" />
          <line x1="200" y1="30" x2="200" y2="480" stroke="#434854" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Bright glass reflection */}
          <polygon points="40,35 150,35 90,475 -20,475" fill="#FFFFFF" opacity="0.15" />
          <polygon points="230,35 340,35 280,475 170,475" fill="#FFFFFF" opacity="0.1" />
        </svg>
      )}

      {type === 'frameless' && (
        <svg viewBox="0 0 400 520" fill="none" className="w-full h-full object-cover">
          <rect width="400" height="520" fill="#E6EEF4" />
          {/* Sky & Horizon vista */}
          <path d="M 0 280 C 120 270, 260 290, 400 275 L 400 370 L 0 370 Z" fill="#CAD8E2" />
          <rect x="0" y="370" width="400" height="150" fill="#D3CCC2" />
          {/* Ceiling track */}
          <rect x="10" y="35" width="380" height="14" fill="#242831" rx="2" />
          {/* Floor track */}
          <rect x="10" y="365" width="380" height="12" fill="#242831" rx="2" />
          {/* Frameless glass panes folded in accordion / park position */}
          <polygon points="40,50 110,65 110,360 40,360" fill="#FFFFFF" opacity="0.45" stroke="#90A4AE" strokeWidth="1" />
          <polygon points="120,65 190,50 190,360 120,360" fill="#FFFFFF" opacity="0.45" stroke="#90A4AE" strokeWidth="1" />
          <polygon points="200,50 270,65 270,360 200,360" fill="#FFFFFF" opacity="0.45" stroke="#90A4AE" strokeWidth="1" />
          <polygon points="280,65 350,50 350,360 280,360" fill="#FFFFFF" opacity="0.45" stroke="#90A4AE" strokeWidth="1" />
          {/* Hinge wheels */}
          <circle cx="110" cy="42" r="5" fill="#546E7A" />
          <circle cx="190" cy="42" r="5" fill="#546E7A" />
          <circle cx="270" cy="42" r="5" fill="#546E7A" />
          {/* Pure open sunlight */}
          <polygon points="130,50 220,50 340,480 250,480" fill="#FFFCE8" opacity="0.4" />
        </svg>
      )}

      {type === 'balcony' && (
        <svg viewBox="0 0 400 520" fill="none" className="w-full h-full object-cover">
          <rect width="400" height="520" fill="#E8E4DD" />
          {/* City skyline through window */}
          <rect x="60" y="160" width="40" height="160" fill="#B4C3D0" />
          <rect x="110" y="120" width="55" height="200" fill="#9FB2C1" />
          <rect x="180" y="190" width="50" height="130" fill="#A8BAC8" />
          <rect x="250" y="140" width="60" height="180" fill="#8EA3B4" />
          {/* Balcony Warm Interior */}
          <rect x="0" y="320" width="400" height="200" fill="#C5BDB1" />
          {/* Designer lounge chair */}
          <ellipse cx="280" cy="420" rx="60" ry="24" fill="#3D4048" />
          <path d="M 240 370 Q 270 340 310 390 Q 280 430 240 370 Z" fill="#5A5F6B" />
          {/* Insulated Triple Glazing Framework */}
          <rect x="20" y="30" width="360" height="290" stroke="#22252C" strokeWidth="10" fill="none" rx="6" />
          <line x1="140" y1="30" x2="140" y2="320" stroke="#22252C" strokeWidth="7" />
          <line x1="260" y1="30" x2="260" y2="320" stroke="#22252C" strokeWidth="7" />
          {/* Tilt and turn window sash */}
          <rect x="146" y="38" width="108" height="274" stroke="#404552" strokeWidth="3" fill="none" />
          <circle cx="240" cy="180" r="4" fill="#111" />
          {/* Light reflection */}
          <polygon points="50,35 120,35 70,315 0,315" fill="#FFFFFF" opacity="0.35" />
          <polygon points="170,35 230,35 190,315 130,315" fill="#FFFFFF" opacity="0.3" />
        </svg>
      )}
    </div>
  );
};

export const ProjectIllustration: React.FC<{
  theme: 'modern-villa' | 'penthouse-terrace' | 'boutique-facade';
  className?: string;
}> = ({ theme, className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#16181D] ${className}`}>
      {theme === 'modern-villa' && (
        <svg viewBox="0 0 600 420" fill="none" className="w-full h-full object-cover">
          {/* Twilight sky */}
          <rect width="600" height="420" fill="#1B1E26" />
          <circle cx="450" cy="80" r="180" fill="#2E384D" opacity="0.4" filter="blur(40px)" />
          {/* Villa Architecture */}
          <polygon points="40,240 560,200 560,340 40,340" fill="#282C37" />
          <rect x="70" y="110" width="460" height="130" fill="#383D4A" />
          {/* Soaring glass facade with warm light inside */}
          <rect x="90" y="130" width="420" height="100" fill="#F8E5C4" opacity="0.85" />
          {/* Slim dark mullions */}
          <line x1="160" y1="130" x2="160" y2="230" stroke="#171920" strokeWidth="4" />
          <line x1="230" y1="130" x2="230" y2="230" stroke="#171920" strokeWidth="4" />
          <line x1="300" y1="130" x2="300" y2="230" stroke="#171920" strokeWidth="4" />
          <line x1="370" y1="130" x2="370" y2="230" stroke="#171920" strokeWidth="4" />
          <line x1="440" y1="130" x2="440" y2="230" stroke="#171920" strokeWidth="4" />
          {/* Infinity pool & water reflection */}
          <polygon points="0,320 600,320 600,420 0,420" fill="#152636" />
          <polygon points="120,320 480,320 540,420 60,420" fill="#F0DCB8" opacity="0.3" filter="blur(8px)" />
          {/* Minimalist pines */}
          <path d="M 30 280 L 50 140 L 70 280 Z" fill="#12141A" />
          <path d="M 520 290 L 545 160 L 570 290 Z" fill="#12141A" />
        </svg>
      )}

      {theme === 'penthouse-terrace' && (
        <svg viewBox="0 0 600 420" fill="none" className="w-full h-full object-cover">
          <rect width="600" height="420" fill="#141720" />
          {/* Sky city night view */}
          <circle cx="300" cy="120" r="120" fill="#283754" opacity="0.6" filter="blur(40px)" />
          {/* City towers below */}
          <rect x="50" y="240" width="70" height="180" fill="#0E121A" />
          <rect x="140" y="190" width="80" height="230" fill="#1A212E" />
          <rect x="240" y="220" width="60" height="200" fill="#121722" />
          <rect x="330" y="170" width="90" height="250" fill="#1E2838" />
          <rect x="440" y="230" width="80" height="190" fill="#111620" />
          {/* Glowing skyscraper windows */}
          <g fill="#FFECA8" opacity="0.6">
            <circle cx="170" cy="220" r="2" />
            <circle cx="190" cy="240" r="2" />
            <circle cx="360" cy="200" r="2" />
            <circle cx="380" cy="230" r="2" />
            <circle cx="360" cy="260" r="2" />
          </g>
          {/* Penthouse High-Finity Glass Perimeter */}
          <polygon points="0,290 600,280 600,420 0,420" fill="#2A2E3B" />
          <line x1="0" y1="280" x2="600" y2="280" stroke="#5C667B" strokeWidth="3" />
          {/* Glass Railing Panels */}
          <rect x="40" y="170" width="160" height="110" fill="#FFFFFF" opacity="0.12" stroke="#485265" strokeWidth="1" />
          <rect x="220" y="170" width="160" height="110" fill="#FFFFFF" opacity="0.12" stroke="#485265" strokeWidth="1" />
          <rect x="400" y="170" width="160" height="110" fill="#FFFFFF" opacity="0.12" stroke="#485265" strokeWidth="1" />
          {/* Reflection gloss */}
          <polygon points="60,170 140,170 100,280 20,280" fill="#FFFFFF" opacity="0.18" />
          <polygon points="240,170 320,170 280,280 200,280" fill="#FFFFFF" opacity="0.18" />
        </svg>
      )}

      {theme === 'boutique-facade' && (
        <svg viewBox="0 0 600 420" fill="none" className="w-full h-full object-cover">
          <rect width="600" height="420" fill="#181A20" />
          {/* Architectural stone portal frame */}
          <rect x="40" y="30" width="520" height="350" fill="#262932" rx="4" />
          <rect x="65" y="55" width="470" height="300" fill="#101116" />
          {/* Boutique luxury interior */}
          <circle cx="300" cy="180" r="100" fill="#F5E4C6" opacity="0.3" filter="blur(30px)" />
          <rect x="250" y="210" width="100" height="140" fill="#423E37" rx="4" />
          <circle cx="300" cy="170" r="30" stroke="#DFCFB7" strokeWidth="4" />
          {/* Giant Jumbo Glass Plate - Seamless */}
          <rect x="65" y="55" width="470" height="300" fill="#FFFFFF" opacity="0.08" />
          {/* Glass diagonal glares */}
          <polygon points="100,55 240,55 180,355 40,355" fill="#FFFFFF" opacity="0.2" />
          <polygon points="340,55 460,55 400,355 280,355" fill="#FFFFFF" opacity="0.15" />
          {/* Anti-reflective Optiwhite laser insignia */}
          <line x1="65" y1="355" x2="535" y2="355" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
        </svg>
      )}
    </div>
  );
};

export const ProductionFacilityVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden rounded-3xl bg-[#1A1C22] shadow-xl ${className}`}>
      <svg viewBox="0 0 600 400" fill="none" className="w-full h-full object-cover">
        {/* Modern clean factory hall with epoxy floor */}
        <rect width="600" height="400" fill="#191B22" />
        <rect x="0" y="240" width="600" height="160" fill="#252A36" />
        {/* High-tech overhead linear LED lights */}
        <line x1="60" y1="40" x2="540" y2="40" stroke="#E3EDF7" strokeWidth="4" opacity="0.8" />
        <line x1="120" y1="80" x2="480" y2="80" stroke="#E3EDF7" strokeWidth="3" opacity="0.6" />
        {/* Light cones */}
        <polygon points="60,40 540,40 580,240 20,240" fill="#FFFFFF" opacity="0.04" />
        {/* CNC Milling Machine Center (elumatec 5-axis) */}
        <rect x="80" y="160" width="280" height="140" fill="#333948" rx="8" />
        <rect x="100" y="180" width="160" height="80" fill="#1D222E" rx="4" />
        <line x1="180" y1="180" x2="180" y2="260" stroke="#00C9A7" strokeWidth="2" strokeDasharray="4 4" />
        {/* Precision laser cutting nozzle */}
        <rect x="170" y="170" width="20" height="30" fill="#58637B" />
        <circle cx="180" cy="202" r="3" fill="#00FFCC" />
        <line x1="180" y1="202" x2="180" y2="240" stroke="#00FFCC" strokeWidth="2" />
        {/* Aluminum profile clamped on machine bed */}
        <rect x="110" y="235" width="220" height="16" fill="#75829C" rx="2" />
        {/* Automated glass vacuum suction lifter robot */}
        <g id="glassRobotArm">
          <circle cx="460" cy="150" r="16" fill="#4B5569" />
          <line x1="460" y1="150" x2="440" y2="230" stroke="#4B5569" strokeWidth="12" strokeLinecap="round" />
          <line x1="440" y1="230" x2="490" y2="280" stroke="#374151" strokeWidth="10" strokeLinecap="round" />
          {/* Suction cups */}
          <circle cx="470" cy="285" r="7" fill="#E2E8F0" />
          <circle cx="510" cy="285" r="7" fill="#E2E8F0" />
          {/* Glass Jumbo sheet being manipulated */}
          <polygon points="410,210 570,170 560,330 400,370" fill="#FFFFFF" opacity="0.25" stroke="#94A3B8" strokeWidth="2" />
          <line x1="430" y1="220" x2="540" y2="340" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
        </g>
        {/* Clean epoxy floor reflection */}
        <ellipse cx="300" cy="360" rx="240" ry="25" fill="#FFFFFF" opacity="0.05" />
      </svg>
    </div>
  );
};
