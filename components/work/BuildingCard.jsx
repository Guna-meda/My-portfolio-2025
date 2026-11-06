"use client";

import { motion, useReducedMotion } from "framer-motion";
import ThumbImage from "@/components/media/ThumbImage";

export function StatusDot({ label }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
      <span className="relative flex h-2.5 w-2.5">
        <span className="status-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}

/** Wide featured card on md+, stacked on mobile. */
export default function BuildingCard({ item, idx = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg md:grid md:grid-cols-5"
    >
      <div className="absolute left-0 top-0 bottom-0 z-10 w-1 bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent dark:from-emerald-500 dark:via-emerald-700 rounded-l-2xl" />

      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 md:col-span-2 md:aspect-auto md:min-h-full">
        <ThumbImage
          src={item.image}
          alt={`${item.name} — preview`}
          fallbackLabel={item.name}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
      </div>

      <div className="flex flex-col gap-3 px-6 py-6 sm:px-8 sm:py-8 md:col-span-3 md:justify-center">
        <StatusDot label={item.status} />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{item.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>

        {/* Subtle progress shimmer — decorative */}
        <div aria-hidden="true" className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
          <div className="shimmer-bar relative h-full w-2/3 overflow-hidden rounded-full bg-emerald-400/70 dark:bg-emerald-500/60" />
        </div>

        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex min-h-[44px] items-center self-start rounded-lg bg-gray-900 px-5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Live preview ↗
        </a>
      </div>
    </motion.article>
  );
}
