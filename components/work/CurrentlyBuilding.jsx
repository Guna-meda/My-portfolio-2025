"use client";

import { motion } from "framer-motion";
import BuildingCard from "./BuildingCard";
import { buildingItems } from "@/lib/content";

export default function CurrentlyBuilding() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-900 dark:text-gray-100"
      >
        Currently Building
      </motion.h2>
      <div className="flex flex-col gap-6 sm:gap-8">
        {buildingItems.map((item, i) => (
          <BuildingCard key={item.href} item={item} idx={i} />
        ))}
      </div>
    </section>
  );
}
