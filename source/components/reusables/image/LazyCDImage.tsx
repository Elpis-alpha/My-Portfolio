"use client";
import { HTMLAttributeReferrerPolicy, useEffect, useMemo, useRef, useState } from "react";
import SafeImage from "./SafeImage";

type LazyCDImageProps = {
  src: string;
  initialWidth: number;
  finalWidth?: number;
  alt: string;
  className: string;
  useBlank?: boolean;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined
};

const LazyCDImage = (props: LazyCDImageProps) => {
  const { alt, className, initialWidth, src, finalWidth, useBlank, referrerPolicy } = props;
  const imageRef = useRef<HTMLImageElement>(null);

  const [ready, setReady] = useState(false);

  const lowSizeSrc = useMemo(() => {
    return src.replace("/upload/", `/upload/c_scale,w_${initialWidth}/`);
  }, [src, initialWidth]);

  const highSizeSrc = useMemo(() => {
    if (!finalWidth) return src;
    return src
      .replace("/upload/", `/upload/c_scale,w_${finalWidth}/`)
      .replace("_normal", "");
  }, [src, finalWidth]);

  useEffect(() => {
    const changeImage = (image: HTMLImageElement) => {
      if (highSizeSrc === lowSizeSrc) return (image.src = highSizeSrc);
      if (image.src === highSizeSrc) return;

      const highSizeImage = new Image();
      highSizeImage.src = highSizeSrc;
      highSizeImage.className = image.className;
      highSizeImage.alt = image.alt;

      highSizeImage.onload = () => {
        image.src = highSizeSrc;
      };
    };

    if (imageRef.current && ready) {
      changeImage(imageRef.current);
    }
  }, [highSizeSrc, ready, lowSizeSrc]);

  return (
    <SafeImage
      setReady={setReady}
      src={lowSizeSrc}
      alt={alt}
      className={className}
      _ref={imageRef}
      useBlank={useBlank}
      referrerPolicy={referrerPolicy}
    />
  );
};
export default LazyCDImage;
