"use client";

import { useState, useRef } from "react";
import { FaCheck, FaRegCopy } from "react-icons/fa";

export default function CopyChip({ text, className = "" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied to clipboard" : `Copy command: ${text}`}
      className={`inline-flex min-h-[44px] max-w-full items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 font-mono text-sm text-gray-800 dark:text-gray-100 transition hover:border-gray-400 dark:hover:border-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${className}`}
    >
      <span className="text-gray-400">$</span>
      <span className="truncate">{text}</span>
      <span className="ml-1 inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-gray-500 dark:text-gray-400" aria-live="polite">
        {copied ? <><FaCheck aria-hidden="true" /> Copied</> : <FaRegCopy aria-hidden="true" />}
      </span>
    </button>
  );
}
