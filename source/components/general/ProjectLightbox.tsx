"use client";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import LazyCDImage from "@/source/components/reusables/image/LazyCDImage";

type Props = {
  open: boolean;
  image: string;
  title: string;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNext: (e?: React.MouseEvent) => void;
  onPrev: (e?: React.MouseEvent) => void;
};

export default function ProjectLightbox({
  open,
  image,
  title,
  currentIndex,
  totalImages,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all z-50"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <LazyCDImage
              src={image}
              initialWidth={50}
              finalWidth={1200}
              alt={`${title} screenshot full`}
              className="w-full max-h-full object-contain rounded-2xl border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-bg-dark/80 border border-white/20 text-white hover:bg-brand-primary hover:text-bg-dark transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-bg-dark/80 border border-white/20 text-white hover:bg-brand-primary hover:text-bg-dark transition-all"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-bg-dark/80 border border-white/20 text-xs font-mono text-white/80">
              {title} — Image {currentIndex + 1} of {totalImages}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
