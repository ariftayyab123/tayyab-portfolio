"use client";

import Image from "next/image";
import { Lock } from "lucide-react";

interface RedactionRegion {
  top: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  label?: string;
}

interface RedactedImageProps {
  src: string;
  alt: string;
  redactions?: RedactionRegion[];
  aspectRatio?: string;
}

export default function RedactedImage({
  src,
  alt,
  redactions = [],
  aspectRatio = "16/9",
}: RedactedImageProps) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border-2 border-[#0A0A0A] bg-[#0A0A0A]/5 select-none" style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
        priority
      />

      {/* Redaction Overlays */}
      {redactions.map((region, idx) => (
        <div
          key={idx}
          className="absolute bg-[#0A0A0A]/95 text-white flex items-center justify-center gap-1.5 border border-red-500/35 overflow-hidden backdrop-blur-[2px] transition-all duration-200 hover:bg-[#0A0A0A] cursor-not-allowed group"
          style={{
            top: region.top,
            left: region.left,
            right: region.right,
            width: region.width,
            height: region.height,
          }}
        >
          <Lock className="w-[10px] h-[10px] text-red-500" />
          <span className="text-[7px] md:text-[9px] uppercase tracking-wider font-extrabold select-none opacity-80 group-hover:opacity-100 whitespace-nowrap">
            {region.label || "Redacted"}
          </span>
        </div>
      ))}
    </div>
  );
}
