"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RedactedImage from "./RedactedImage";
import { redactionsMap } from "@/data/redactions";

interface ImageSliderProps {
  images: string[];
  title: string;
  aspectRatio?: string;
}

export default function ImageSlider({ images, title, aspectRatio = "16/10" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <RedactedImage
        src={images[0]}
        alt={title}
        redactions={redactionsMap[images[0]] || []}
        aspectRatio={aspectRatio}
      />
    );
  }

  return (
    <div className="relative w-full group">
      {/* Main Image View */}
      <div className="relative overflow-hidden w-full rounded-xl" style={{ aspectRatio }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <RedactedImage
              src={images[currentIndex]}
              alt={`${title} - screenshot ${currentIndex + 1}`}
              redactions={redactionsMap[images[currentIndex]] || []}
              aspectRatio={aspectRatio}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 border-2 border-[#0A0A0A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFD700] hover:scale-105 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-[#0A0A0A]" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/90 border-2 border-[#0A0A0A] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FFD700] hover:scale-105 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-[#0A0A0A]" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full border border-[#0A0A0A]/20 ${
              idx === currentIndex
                ? "w-6 h-2 bg-[#0A0A0A] border-[#0A0A0A]"
                : "w-2 h-2 bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
