// components/AnimatedBlob.tsx
export function AnimatedBlob({
  className = "",
}: { className?: string }) {
  return (
    <div
      className={
        "relative isolate h-[320px] w-[320px] md:h-[380px] md:w-[380px] " +
        "drop-shadow-xl " + className
      }
      aria-hidden="true"
    >
      {/* Back glow */}
      <div
        className="absolute inset-0 blur-2xl opacity-60 blob-hue"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, hsl(var(--brand)) 0%, transparent 60%)",
        }}
      />

      {/* Main morphing blob (brand → orange) */}
      <div
        className="absolute inset-0 blob rounded-[60%_40%_60%_40%/60%_40%_60%_40%]"
        style={{
          background:
            "conic-gradient(from 0deg, hsl(var(--brand)) 0%, rgba(255,165,0,0.7) 30%, rgba(255,200,120,0.7) 60%, hsl(var(--brand)) 100%)",
        }}
      />

      {/* Depth layer 1 */}
      <div
        className="absolute inset-0 blob-delay mix-blend-multiply rounded-[55%_45%_65%_35%/55%_45%_65%_35%] opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 60% 40%, rgba(255,150,64,0.9), transparent 60%)",
        }}
      />

      {/* Depth layer 2 */}
      <div
        className="absolute inset-0 blob-slow mix-blend-screen rounded-[65%_35%_55%_45%/45%_55%_35%_65%] opacity-70"
        style={{
          background:
            "radial-gradient(45% 45% at 40% 60%, rgba(255,220,140,0.8), transparent 65%)",
        }}
      />

      {/* Subtle border/ring to match your brand */}
      <div className="pointer-events-none absolute inset-0 rounded-[40%] ring-1 ring-[hsl(var(--brand)/0.14)]" />
    </div>
  );
}
