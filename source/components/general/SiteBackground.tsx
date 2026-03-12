"use client";
import FloatingLines from "../reusables/FloatingLines";

const SiteBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-dark w-full h-full">
    <FloatingLines
      enabledWaves={["top", "middle", "bottom"]}
      // Array - specify line count per wave; Number - same count for all waves
      lineCount={5}
      // Array - specify line distance per wave; Number - same distance for all waves
      lineDistance={5}
      bendRadius={5}
      bendStrength={-0.5}
      interactive={true}
      parallax={true}
      // linesGradient, string[], Array of hex color strings for gradient coloring of lines (max 8 colors).
      linesGradient={[
        "#00f2ff",
        "#7000ff",
      ]}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-bg-dark/60 pointer-events-none" />
  </div>
);

export default SiteBackground;