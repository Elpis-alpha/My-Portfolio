"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/source/projects";
import { cn, pad } from "@/source/utils";
import Shot from "../reusables/Shot";

const INTERVAL = 4800;

/** The hero's figure: case-study screenshots cycling inside one frame. */
const HeroShowcase = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = CASE_STUDIES[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % CASE_STUDIES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Link href={`/projects/${project.slug}`} className="frame group block" aria-label={`${project.title} case study`}>
        <div className="frame-bar">
          <span className="frame-dots" aria-hidden><i /><i /><i /></span>
          <span className="truncate font-mono text-[10px] tracking-wide text-faint">
            {project.host ?? project.title.toLowerCase()}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-sunk">
          <AnimatePresence initial={false}>
            <motion.div
              key={project.slug}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Shot
                image={project.cover}
                priority={index === 0}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Link>

      <div className="mt-4 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="label">
            <span className="text-accent">Fig. {pad(index + 1)}</span>
            <span className="mx-2 text-faint">/</span>
            {project.kind}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="group mt-2 inline-flex items-center gap-2 text-sm text-ink"
          >
            <span className="link">{project.title} case study</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 pt-1" role="tablist" aria-label="Featured projects">
          {CASE_STUDIES.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={p.title}
              onClick={() => setIndex(i)}
              className="group/tick py-2"
            >
              <span
                className={cn(
                  "block h-[3px] rounded-full transition-all duration-500",
                  i === index ? "w-7 bg-accent" : "w-3 bg-line-strong group-hover/tick:bg-muted",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
