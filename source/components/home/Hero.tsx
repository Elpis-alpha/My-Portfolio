import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PROFILE, STATS } from "@/source/config";
import DimensionLine from "../reusables/DimensionLine";
import LocalTime from "../reusables/LocalTime";
import Years from "../reusables/Years";
import HeroShowcase from "./HeroShowcase";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

const Hero = () => (
  <section className="shell pb-14 pt-28 md:pb-20 md:pt-36">
    {/* Sheet header */}
    <div className="rise label flex items-center justify-between gap-4 border-b border-line pb-4" style={i(0)}>
      <span>
        {PROFILE.name}
        <span className="mx-2 text-faint">/</span>
        <span className="text-faint">Portfolio, sheet 01</span>
      </span>
      <span className="hidden items-center gap-2 sm:flex">
        {PROFILE.locationShort}
        <span className="text-faint">/</span>
        <LocalTime withSeconds />
        <span className="text-faint">{PROFILE.utcOffset}</span>
      </span>
    </div>

    <div className="mt-10 grid items-end gap-x-10 gap-y-14 md:mt-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-raise/70 py-1.5 pl-3 pr-4 text-[13px] text-muted backdrop-blur" style={i(1)}>
          <span className="pulse-dot h-2 w-2 rounded-full bg-ok" />
          {PROFILE.currentRole} at <span className="text-ink">{PROFILE.currentCompany}</span>
        </p>

        <h1 className="rise display text-[clamp(2.9rem,10.5vw,4.4rem)] lg:text-[clamp(4rem,6.1vw,5.6rem)]" style={i(2)}>
          I build{" "}
          <span className="relative inline-block whitespace-nowrap">
            <em className="text-accent">real-time</em>
            <svg
              aria-hidden
              viewBox="0 0 300 20"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-[0.14em] left-0 h-[0.2em] w-full overflow-visible text-accent"
            >
              <path
                className="ink-stroke"
                pathLength={1}
                d="M3 12 C 50 4, 96 16, 148 9 S 250 5, 297 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {/* The cursor that draws the line: a nod to multiplayer canvases. */}
            <span aria-hidden className="ink-cursor pointer-events-none absolute z-10 hidden items-start sm:flex">
              <svg width="16" height="18" viewBox="0 0 16 18" className="fill-accent drop-shadow">
                <path d="M1 1l5.2 15 2.4-6.1L15 7.6z" stroke="var(--bg)" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span className="-ml-0.5 mt-3.5 rounded-full bg-accent px-2 py-0.5 font-sans text-[11px] font-medium not-italic leading-none tracking-normal text-accent-ink">
                {PROFILE.firstName}
              </span>
            </span>
          </span>{" "}
          web products that hold up in production.
        </h1>

        <p className="rise prose-body mt-8 max-w-[38rem] text-lg md:text-xl" style={i(3)}>
          Full-stack engineer with <Years /> years shipping multiplayer games,
          collaborative tools, commerce and on-chain platforms in TypeScript,
          React and Node.js. Fully remote, from schema to deploy.
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={i(4)}>
          <Link href="#work" className="btn btn-primary">
            See selected work <ArrowDown size={16} className="nudge-y" />
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Get in touch <ArrowRight size={16} className="nudge-x" />
          </Link>
        </div>
      </div>

      <div className="rise lg:col-span-5" style={i(5)}>
        <HeroShowcase />
      </div>
    </div>

    {/* Spec strip */}
    <div className="rise mt-16 md:mt-24" style={i(6)}>
      <DimensionLine className="mb-5 px-3" />
      <ul className="grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
        {STATS.map((s) => (
          <li key={s.label} className="border-b border-r border-line px-5 py-6 md:px-7 md:py-8">
            <p className="display text-5xl md:text-6xl">
              {s.value === "years" ? <Years /> : s.value}
            </p>
            <p className="mt-3 max-w-[16rem] text-sm leading-snug text-muted">
              {s.value === "years" ? `years ${s.label}` : s.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
