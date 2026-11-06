"use client";

import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  { label: "testId", note: "most stable" },
  { label: "ariaLabel" },
  { label: "text" },
  { label: "cssPath" },
  { label: "fuzzy", note: "last resort" },
];

/** Animated horizontal stepper (wraps on mobile) showing the selector fallback chain. */
export default function FallbackChain() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm p-4 sm:p-5 shadow-lg">
      <p className="mb-3 text-sm font-semibold text-indigo-700 dark:text-indigo-400">Self-healing selector chain</p>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-3" aria-label="Selector fallback order">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="flex items-center gap-1"
          >
            <span className="flex flex-col items-center">
              <span
                className="flow-pulse rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1.5 font-mono text-xs sm:text-sm font-medium text-indigo-800 dark:text-indigo-300"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <span className="mr-1.5 text-indigo-400 dark:text-indigo-500">{i + 1}</span>
                {s.label}
              </span>
              {s.note && <span className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">{s.note}</span>}
            </span>
            {i < STEPS.length - 1 && (
              <span aria-hidden="true" className="px-0.5 text-indigo-300 dark:text-indigo-700">→</span>
            )}
          </motion.li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        If a step no longer matches after a UI change, the next one takes over.
      </p>
    </div>
  );
}
