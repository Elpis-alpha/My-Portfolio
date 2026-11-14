"use client";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import type { ProjectImage } from "@/source/projects";
import { cn, pad } from "@/source/utils";
import Reveal from "../reusables/Reveal";
import Shot from "../reusables/Shot";
import Lightbox from "../general/Lightbox";

/** Screenshot grid for a case study. The first image runs full width. */
const Gallery = ({ images, title }: { images: ProjectImage[]; title: string }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((image, i) => (
          <Reveal key={image.src} delay={(i % 2) * 80} className={cn(i === 0 && images.length % 2 === 1 && "sm:col-span-2")}>
            <figure>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Enlarge: ${image.alt}`}
                className="frame group relative block w-full"
              >
                <div className="aspect-[16/10] overflow-hidden bg-sunk">
                  <Shot
                    image={image}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-line-strong bg-bg/85 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 size={13} />
                </span>
              </button>
              <figcaption className="mt-3 flex gap-3 text-sm text-muted">
                <span className="label shrink-0 pt-0.5 !text-accent">Fig. {pad(i + 1)}</span>
                {image.alt}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Lightbox images={images} index={open} title={title} onIndex={setOpen} />
    </>
  );
};

export default Gallery;
