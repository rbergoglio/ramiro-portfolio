// components/ObeliskOrbit.tsx
type Props = {
  className?: string;
  speed?: number; // 1 = normal, 0.8 slower, 1.5 faster
};

export function ObeliskOrbit({ className = "", speed = 1 }: Props) {
  const cx = 150;
  const cy = 180;

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 300 420"
        role="img"
        aria-labelledby="obeliskTitle obeliskDesc"
        className="h-[320px] w-[320px] md:h-[380px] md:w-[380px]"
      >
        <title id="obeliskTitle">Obelisco de Buenos Aires with orbiting orbs</title>
        <desc id="obeliskDesc">
          Stylized obelisk with three small glowing orbs rotating around on elliptical paths.
        </desc>

        {/* 🔒 All CSS lives inside the SVG (works in Server Components) */}
        <style>
          {`
            @keyframes orbit-spin { to { transform: rotate(360deg); } }
            .svg-orbit { animation-name: orbit-spin; animation-timing-function: linear; animation-iteration-count: infinite; }
            @media (prefers-reduced-motion: reduce) {
              .svg-orbit { animation: none !important; }
            }
          `}
        </style>

        <defs>
          <filter id="blur6" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>

          <linearGradient id="shaftGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f7f7f8" />
            <stop offset="50%" stopColor="#e9e9eb" />
            <stop offset="100%" stopColor="#d9d9de" />
          </linearGradient>

          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8e8ec" />
            <stop offset="100%" stopColor="#cfcfd6" />
          </linearGradient>

          <linearGradient id="brandAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--brand))" />
            <stop offset="100%" stopColor="rgba(255,165,0,0.9)" />
          </linearGradient>

          <radialGradient id="bgGlow" cx="${cx}" cy="${cy}" r="1">
            <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* background glow */}
        <rect width="100%" height="100%" fill="url(#bgGlow)" />

        {/* ground shadow */}
        <ellipse cx={cx} cy="340" rx="70" ry="12" fill="rgba(0,0,0,0.15)" filter="url(#blur6)" />

        {/* base */}
        <rect x={cx - 60} y="300" width="120" height="28" fill="url(#baseGrad)" />
        <rect x={cx - 45} y="280" width="90" height="24" fill="url(#baseGrad)" />

        {/* shaft */}
        <rect x={cx - 20} y="120" width="40" height="160" fill="url(#shaftGrad)" />
        <line x1={cx} y1="120" x2={cx} y2="280" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />

        {/* tip */}
        <polygon points={`${cx},90 ${cx - 20},120 ${cx + 20},120`} fill="url(#shaftGrad)" />
        <polygon points={`${cx},85 ${cx - 8},100 ${cx + 8},100`} fill="white" opacity="0.5" />

        {/* orbit paths */}
        <ellipse cx={cx} cy={cy} rx="110" ry="42" fill="none"
          stroke="url(#brandAccent)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 6" />
        <ellipse cx={cx} cy={cy} rx="85" ry="32" fill="none"
          stroke="url(#brandAccent)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 6" />
        <ellipse cx={cx} cy={cy} rx="62" ry="24" fill="none"
          stroke="url(#brandAccent)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="2 6" />

        {/* orbs: animation duration via inline style (no styled-jsx) */}
        <g className="svg-orbit" style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${16 / speed}s` }}>
          <circle cx={cx + 110} cy={cy} r="6" fill="hsl(var(--brand))" />
          <circle cx={cx + 110} cy={cy} r="12" fill="hsl(var(--brand))" opacity="0.15" />
        </g>

        <g className="svg-orbit" style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${12 / speed}s`, animationDirection: 'reverse' as const }}>
          <circle cx={cx + 85} cy={cy} r="5" fill="rgba(255,165,0,0.95)" />
          <circle cx={cx + 85} cy={cy} r="10" fill="rgba(255,165,0,0.95)" opacity="0.15" />
        </g>

        <g className="svg-orbit" style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${9 / speed}s` }}>
          <circle cx={cx + 62} cy={cy} r="4.5" fill="rgba(255,200,120,1)" />
          <circle cx={cx + 62} cy={cy} r="9" fill="rgba(255,200,120,1)" opacity="0.15" />
        </g>
      </svg>
    </div>
  );
}
