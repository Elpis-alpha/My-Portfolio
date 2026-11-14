"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/source/utils";

/**
 * A drafting dimension line that measures itself: the label is the element's
 * real width in pixels and follows the window as it resizes.
 */
const DimensionLine = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className={cn("flex items-center gap-3 text-faint", className)}>
      <span className="h-3 w-px bg-line-strong" />
      <svg width="7" height="8" viewBox="0 0 7 8" className="-ml-3 shrink-0 fill-current"><path d="M0 4 7 0v8z" /></svg>
      <span className="h-px flex-1 bg-line-strong" />
      <span className="label !text-[10px] !text-faint tabular-nums">
        {width === null ? "····" : width} px
      </span>
      <span className="h-px flex-1 bg-line-strong" />
      <svg width="7" height="8" viewBox="0 0 7 8" className="-mr-3 shrink-0 fill-current"><path d="M7 4 0 0v8z" /></svg>
      <span className="h-3 w-px bg-line-strong" />
    </div>
  );
};

export default DimensionLine;
