"use client";
import { HTMLAttributeReferrerPolicy, useEffect, useState } from "react";
import SafeImage from "./SafeImage";

type LazyImageProps = {
  lowSizeSrc: string;
  highSizeSrc: string;
  alt: string;
  className: string;
  useBlank?: boolean;
  style?: React.CSSProperties;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
};

const LazyImage = (props: LazyImageProps) => {
  const { alt, className, highSizeSrc, lowSizeSrc, useBlank, referrerPolicy } =
    props;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const changeImage = () => {
      if (highSizeSrc === lowSizeSrc) return setLoaded(true);

      const highSizeImage = new Image();
      highSizeImage.fetchPriority = "low";
      highSizeImage.src = highSizeSrc;

      highSizeImage.onload = () => {
        setLoaded(true);
      };
    };

    changeImage();
  }, [highSizeSrc, lowSizeSrc]);

  return (
    <SafeImage
      src={loaded ? highSizeSrc : lowSizeSrc}
      alt={alt}
      className={className}
      useBlank={useBlank}
      style={props.style}
      referrerPolicy={referrerPolicy}
    />
  );
};
export default LazyImage;
