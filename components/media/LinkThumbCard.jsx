"use client";

import { motion, useReducedMotion } from "framer-motion";
import ThumbImage from "./ThumbImage";

const ACCENTS = {
  blue: "from-blue-400/70 via-sky-200/40 to-blue-400/70",
  neutral: "from-gray-400/60 via-gray-200/50 to-gray-400/60",
  emerald: "from-emerald-400/70 via-teal-300/60 to-emerald-400/70",
  indigo: "from-indigo-400/70 via-violet-300/60 to-indigo-400/70",
};

/**
 * Whole card is a single external link: thumbnail on top (always present),
 * then badge, title, short description and an "Open ↗" affordance.
 */
export default function LinkThumbCard({
  href,
  title,
  description,
  image,
  badge,
  accent = "blue",
  className = "",
  compact = false,
}) {
  const reduce = useReducedMotion();
  const glow = ACCENTS[accent] || ACCENTS.blue;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`group relative rounded-2xl p-px overflow-hidden shadow-lg ${className}`}
    >
      {/* Hover glow border (conic gradient spins behind a 1px inset) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[60%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <span
          className={`block h-full w-full border-glow-spin bg-conic ${glow}`}
        />
      </span>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-white dark:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none">
            <ThumbImage src={image} alt={`${title} — thumbnail`} fallbackLabel={title} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-100 shadow">
              {badge}
            </span>
          )}
        </div>

        <div className={`flex flex-1 flex-col gap-2 ${compact ? "p-4" : "p-5 sm:p-6"}`}>
          <h3 className="text-base sm:text-lg font-bold leading-snug text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
          )}
          <span className="mt-auto pt-2 inline-flex min-h-[44px] items-center text-sm font-semibold text-gray-800 dark:text-gray-100 transition-transform group-hover:translate-x-0.5">
            Open ↗
          </span>
        </div>
      </a>
    </motion.div>
  );
}
