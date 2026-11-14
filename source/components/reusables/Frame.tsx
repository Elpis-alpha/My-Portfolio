import { cn } from "@/source/utils";
import type { ProjectImage } from "@/source/projects";
import Shot from "./Shot";

type FrameProps = {
  image: ProjectImage;
  /** Text for the address bar. */
  host?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Extra classes for the image (e.g. hover zoom). */
  imageClassName?: string;
  /** Tailwind aspect class. Defaults to 16/10. */
  ratio?: string;
};

/** A screenshot inside a minimal browser frame. */
const Frame = ({
  image,
  host,
  sizes,
  priority,
  className,
  imageClassName,
  ratio = "aspect-[16/10]",
}: FrameProps) => (
  <div className={cn("frame", className)}>
    <div className="frame-bar">
      <span className="frame-dots" aria-hidden>
        <i />
        <i />
        <i />
      </span>
      {host && (
        <span className="truncate font-mono text-[10px] tracking-wide text-faint">
          {host}
        </span>
      )}
    </div>
    <div className={cn("overflow-hidden bg-sunk", ratio)}>
      <Shot
        image={image}
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
    </div>
  </div>
);

export default Frame;
