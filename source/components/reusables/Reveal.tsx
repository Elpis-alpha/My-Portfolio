"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/source/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, for staggering siblings. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Fades content up when it scrolls into view. Pure CSS transition toggled by
 * an IntersectionObserver; see `.reveal` in global.css (it is neutralised for
 * reduced motion and when JavaScript is off).
 */
const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
