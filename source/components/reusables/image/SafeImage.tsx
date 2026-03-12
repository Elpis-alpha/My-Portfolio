"use client";
import {
  HTMLAttributeReferrerPolicy,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  _ref?: React.Ref<HTMLImageElement>;
  setReady?: React.Dispatch<React.SetStateAction<boolean>>;
  useBlank?: boolean;
  style?: React.CSSProperties;
  title?: string;
  dataTooltipId?: string;
  dataTooltipContent?: string;

  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  decoding?: ImgHTMLAttributes<HTMLImageElement>["decoding"];
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
};

const errorSrc = "/icons/error.svg";
const blankSrc = "/icons/blank.svg";

const SafeImage = ({
  src,
  alt,
  className,
  _ref,
  setReady,
  useBlank,
  style,
  title,
  dataTooltipId,
  dataTooltipContent,
  decoding,
  loading,
  referrerPolicy
}: SafeImageProps) => {
  const [error, setError] = useState(false);
  const [ready, _setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (setReady) setReady(true);
      _setReady(true);
      setError(false);
    };
    img.onerror = (err) => {
      console.error("Error loading image", src, err);
      _setReady(true);
      if (setReady) setReady(true);
      setError(true);
    };
  }, [src, setReady]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={
        !ready
          ? useBlank
            ? blankSrc
            : src || errorSrc
          : error
            ? errorSrc
            : src || errorSrc
      }
      alt={alt}
      className={className}
      ref={_ref}
      style={style}
      title={title}
      data-tooltip-id={dataTooltipId}
      data-tooltip-content={dataTooltipContent}
      decoding={decoding}
      loading={loading}
      referrerPolicy={referrerPolicy}
    />
  );
};

export default SafeImage;
