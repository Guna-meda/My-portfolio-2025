"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; 

const projects = [
  {
    title: "Spotify clone",
    img: "/images/spotify.png",
    link: "/projects/spotify-clone",
  },
  {
    title: "Together",
    img: "/images/Together.png",
    link: "/projects/together",
  },
  {
    title: "3x-Player",
    img: "/images/yt-player.png",
    link: "/projects/yt-player",
  },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Responsive heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-900 dark:text-gray-100">
        My Projects
      </h2>

      {/* Grid layout is already responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background Image */}
            <div
              className="h-56 sm:h-64 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.img})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

            {/* Title */}
            <h3 className="absolute bottom-4 left-4 text-white text-base sm:text-lg font-semibold tracking-wide z-10">
              {project.title}
            </h3>

            {/* Hover Button */}
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <Link
                    href={project.link}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    Visit Project
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
