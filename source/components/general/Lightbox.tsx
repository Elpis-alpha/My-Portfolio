"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/source/projects";
import { pad } from "@/source/utils";
import Shot from "../reusables/Shot";

type LightboxProps = {
  images: ProjectImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  title: string;
  onIndex: (index: number | null) => void;
};

/** Full-screen gallery viewer. Arrow keys move, Escape closes. */
const Lightbox = ({ images, index, title, onIndex }: LightboxProps) => {
  const open = index !== null;
  const count = images.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onIndex(null);
      if (e.key === "ArrowRight") onIndex((index + 1) % count);
      if (e.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, count, onIndex]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => onIndex(null)}
          className="fixed inset-0 z-[70] flex flex-col bg-sunk/95 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <p className="label">
              <span className="text-accent">Fig. {pad(index + 1)}</span>
              <span className="mx-2 text-faint">/</span>
              {pad(count)}
              <span className="mx-2 text-faint">—</span>
              {title}
            </p>
            <button
              type="button"
              aria-label="Close gallery"
              onClick={() => onIndex(null)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-ink transition-colors hover:border-ink"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-6xl flex-col items-center"
            >
              <Shot
                image={images[index]}
                sizes="100vw"
                priority
                className="max-h-[76vh] w-auto rounded-lg border border-line-strong object-contain"
              />
              <p className="mt-4 max-w-2xl text-center text-sm text-muted">
                {images[index].alt}
              </p>
            </motion.div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    onIndex((index - 1 + count) % count);
                  }}
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg/80 text-ink transition-colors hover:bg-accent hover:text-accent-ink sm:left-5"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    onIndex((index + 1) % count);
                  }}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg/80 text-ink transition-colors hover:bg-accent hover:text-accent-ink sm:right-5"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Lightbox;
