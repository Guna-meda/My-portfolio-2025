"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AutoplayVideo from "@/components/media/AutoplayVideo";
import ThumbImage from "@/components/media/ThumbImage";

/**
 * Slides: { type: "video", id, title } | { type: "image", src, alt }
 * The video slide is the primary media. Arrows show only when there are 2+ slides.
 */
export default function MediaCarousel({ slides }) {
  const [i, setI] = useState(0);
  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n === slides.length - 1 ? 0 : n + 1));
  const slide = slides[i];

  return (
    <div className="flex flex-col gap-3">
      {slide.type === "video" ? (
        <AutoplayVideo key={slide.id} id={slide.id} title={slide.title} />
      ) : (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-muted shadow-lg">
          <ThumbImage key={slide.src} src={slide.src} alt={slide.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      )}

      {slides.length > 1 && (
        <div className="flex items-center justify-between" role="group" aria-label="Media navigation">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous media"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            <FaArrowLeft aria-hidden="true" />
          </button>
          <span className="text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
            {i + 1} / {slides.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next media"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
