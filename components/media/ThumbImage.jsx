"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Image that always has something to show: skeleton while loading, and a
 * designed gradient fallback (with the title) if the file fails to load.
 * Fills its parent — the parent must be `relative` and have an aspect ratio.
 */
export default function ThumbImage({
  src,
  alt,
  fallbackLabel,
  sizes = "(min-width: 768px) 50vw, 85vw",
  className = "",
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <>
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none"
        />
      )}
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-4 text-center"
        >
          <span className="text-lg sm:text-xl font-bold text-white/90">{fallbackLabel || alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`object-cover transition-all duration-500 ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
          } ${className}`}
        />
      )}
    </>
  );
}
