"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThumbImage from "@/components/media/ThumbImage";
import { StatusDot } from "@/components/work/BuildingCard";
import { buildingItems } from "@/lib/content";

/** Compact home-page teaser that links to /work. */
export default function BuildingTeaser() {
  const item = buildingItems[0];
  if (!item) return null;
  return (
    <section aria-label="Currently building" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/work"
          className="group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg transition hover:border-gray-400 dark:hover:border-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <div className="absolute left-0 top-0 bottom-0 z-10 w-1 bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent dark:from-emerald-500 dark:via-emerald-700 rounded-l-2xl" />
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 sm:aspect-auto sm:w-56 sm:shrink-0">
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none">
              <ThumbImage src={item.image} alt={`${item.name} — preview`} fallbackLabel={item.name} sizes="(min-width: 640px) 224px, 100vw" />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1.5 px-5 py-5 sm:px-6">
            <StatusDot label="Currently building" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{item.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">{item.description}</p>
            <span className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-gray-800 dark:text-gray-100">
              See what I&apos;m building →
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
