import { FaPlay } from "react-icons/fa";

// Full class strings so Tailwind can see them.
export const ACCENTS = {
  emerald: {
    title: "text-emerald-700 dark:text-emerald-400",
    heading: "text-emerald-700 dark:text-emerald-400",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white focus-visible:outline-emerald-500",
    chip: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    bar: "from-emerald-400 via-emerald-300 dark:from-emerald-500 dark:via-emerald-700",
  },
  indigo: {
    title: "text-indigo-700 dark:text-indigo-400",
    heading: "text-indigo-700 dark:text-indigo-400",
    button: "bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:outline-indigo-500",
    chip: "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-900",
    bar: "from-indigo-400 via-violet-300 dark:from-indigo-500 dark:via-violet-700",
  },
};

export function TechChips({ items, accent }) {
  const a = ACCENTS[accent];
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((t) => (
        <li key={t} className={`rounded-full border px-3 py-1 text-xs sm:text-sm font-medium ${a.chip}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Primary (accent-filled) or secondary (outlined) external link button. */
export function ProjectButton({ href, children, accent, variant = "primary", icon }) {
  const a = ACCENTS[accent];
  const base =
    "inline-flex min-h-[44px] items-center gap-2 rounded-lg px-4 text-sm font-semibold transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? a.button
      : "border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-gray-500";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {icon}
      {children}
    </a>
  );
}

export function PlayIcon() {
  return <FaPlay aria-hidden="true" className="text-xs" />;
}

export function BulletList({ items, accent }) {
  const a = ACCENTS[accent];
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li key={text} className="relative pl-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className={`absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-b ${a.bar}`} />
          {text}
        </li>
      ))}
    </ul>
  );
}
