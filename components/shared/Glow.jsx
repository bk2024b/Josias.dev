export function Glow({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px] ${className}`}
    />
  );
}
