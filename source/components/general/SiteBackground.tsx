/**
 * The drafting sheet behind every page: a fine grid with heavier lines every
 * fifth division, fading out towards the edges, plus a little paper grain.
 * Pure CSS, no canvas.
 */
const SiteBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: [
          "linear-gradient(var(--grid-major) 1px, transparent 1px)",
          "linear-gradient(90deg, var(--grid-major) 1px, transparent 1px)",
          "linear-gradient(var(--grid-minor) 1px, transparent 1px)",
          "linear-gradient(90deg, var(--grid-minor) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "160px 160px, 160px 160px, 32px 32px, 32px 32px",
        backgroundPosition: "center top",
        maskImage:
          "radial-gradient(ellipse 85% 70% at 50% 0%, #000 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 70% at 50% 0%, #000 35%, transparent 100%)",
      }}
    />
    <div
      className="absolute -top-[30vh] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
      style={{ background: "var(--accent)" }}
    />
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{ backgroundImage: "url(/misc/noise.svg)" }}
    />
  </div>
);

export default SiteBackground;
