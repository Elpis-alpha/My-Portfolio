import { cn } from "@/source/utils";
import type { ProjectImage } from "@/source/projects";

/**
 * Resolves a project image to src/srcSet.
 * - "/work/<name>" -> local -800 / -1600 .webp variants in /public/work
 * - Cloudinary URL -> on-the-fly resized, auto format and quality
 */
export function imageSources(src: string) {
  if (src.startsWith("/work/")) {
    return {
      src: `${src}-1600.webp`,
      srcSet: `${src}-800.webp 800w, ${src}-1600.webp 1600w`,
    };
  }
  if (src.includes("res.cloudinary.com") && src.includes("/upload/")) {
    const at = (w: number) =>
      src.replace("/upload/", `/upload/f_auto,q_auto,c_scale,w_${w}/`);
    return {
      src: at(1600),
      srcSet: `${at(480)} 480w, ${at(800)} 800w, ${at(1200)} 1200w, ${at(1600)} 1600w`,
    };
  }
  return { src, srcSet: undefined };
}

type ShotProps = {
  image: ProjectImage;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/** Plain responsive <img>. Remote images are not run through next/image. */
const Shot = ({ image, sizes, className, priority }: ShotProps) => {
  const { src, srcSet } = imageSources(image.src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
      alt={image.alt}
      // Above-the-fold images load eagerly; everything else is lazy.
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      draggable={false}
      className={cn("block h-full w-full object-cover object-top", className)}
    />
  );
};

export default Shot;
