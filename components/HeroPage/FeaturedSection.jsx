"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import LinkThumbCard from "@/components/media/LinkThumbCard";
import { featuredItems } from "@/lib/content";

export default function FeaturedSection() {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const child = el.children[0];
      if (!child) return;
      const step = child.offsetWidth + 16;
      setActive(Math.min(featuredItems.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    const el = scroller.current;
    if (!el) return;
    const child = el.children[i];
    el.scrollTo({ left: child.offsetLeft - el.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="featured-heading" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-10"
      >
        <h2 id="featured-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Featured
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">Recent highlights</p>
      </motion.div>

      {/* Mobile: snap carousel · md+: 2-col grid */}
      <div
        ref={scroller}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0"
      >
        {featuredItems.map((item) => (
          <div key={item.href} className="w-[85%] shrink-0 snap-start md:w-auto">
            <LinkThumbCard {...item} className="h-full" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1 md:hidden" role="group" aria-label="Featured pagination">
        {featuredItems.map((item, i) => (
          <button
            key={item.href}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show highlight ${i + 1} of ${featuredItems.length}`}
            aria-current={active === i}
            className="flex h-11 w-8 items-center justify-center"
          >
            <span
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-gray-800 dark:bg-gray-100" : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
