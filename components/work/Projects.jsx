"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "MedRemind",
    img: "/images/MedRemind.png",
    link: "/projects/MedRemind",
  },
  {
    title: "IntervuAI",
    img: "/images/intervu.png",
    link: "/projects/IntervuAI",
  },
  {
    title: "Nodejs-Microservices",
    img: "/images/nodejs.png",
    link: "/projects/nodejs-microservices",
  },
  {
    title: "AI-Goverend RBAC System",
    img: "/images/rbac.png",
    link: "/projects/ai-governed-rbac-system",
  },
   {
    title: "Together",
    img: "/images/Together.png",
    link: "/projects/together",
  },
  {
    title: "Spotify clone",
    img: "/images/spotify.png",
    link: "/projects/spotify-clone",
  },
 
  {
    title: "3x-Player",
    img: "/images/yt-player.png",
    link: "/projects/yt-player",
  },
];

// Add your client websites here (same shape as projects)
const clientWebsites = [
   {
    title: "Candlestroke Technologies",
    img: "/images/candlestroke.png",
    link: "https://candlestroketech.com",
  },
  {
    title: "Purohith(client) Website",
    img: "/images/Purohith.png",
    link: "https://www.sadgurujyothishyalayam.com",
  }
];

const experience = {
  role: "Full-Stack Developer",
  company: "Candlestroke Technologies",
  companyUrl: "https://candlestroketech.com",
  period: "August 2025 - October 2025",
  highlights: [
    {
      icon: "",
      text: "Developed backend for Profit11 mobile application MVP (available on Play Store) using RESTful APIs, OTP-based login, and JWT-based authentication for secure session management.",
    },
    {
      icon: "",
      text: "Built the company website in Next.js — candlestroketech.com",
    },
  ],
};

// ─── Shared project card ──────────────────────────────────────────────────────
function ProjectCard({ project, idx, hovered, setHovered, external = false }) {
  const router = useRouter();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // ─── Touch detection (client-side only, avoids SSR issues) ───
  useEffect(() => {
    const detectTouchDevice = () => {
      return (
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        "ontouchstart" in window
      );
    };
    setIsTouchDevice(detectTouchDevice());
  }, []);

  // ─── Handle click navigation for touch devices ───
  const handleTouchNavigation = () => {
    if (!external) {
      router.push(project.link);
    } else {
      window.open(project.link, "_blank");
    }
  };

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => !isTouchDevice && setHovered(idx)}
      onMouseLeave={() => !isTouchDevice && setHovered(null)}
      onClick={() => isTouchDevice && handleTouchNavigation()}
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
      {/* Hover Button - Only show on desktop */}
      {!isTouchDevice && (
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
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md text-sm font-semibold hover:scale-105 transition-transform"
              >
                {external ? "Visit Website" : "Visit Project"}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  const [clientHovered, setClientHovered] = useState(null);

  return (
    <>
      {/* ── Experience Section ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-900 dark:text-gray-100"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-lg overflow-hidden"
        >
          {/* Subtle left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent dark:from-gray-500 dark:via-gray-600 rounded-l-2xl" />

          <div className="px-6 sm:px-8 py-6 sm:py-8">
            {/* Role + company row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                  {experience.role}
                </h3>
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  {experience.company} ↗
                </a>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                {experience.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {experience.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  <span className="mt-0.5 text-base shrink-0">{h.icon}</span>
                  <span>{h.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ── Projects Section ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </section>

      {/* ── Client Websites Section ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Client Websites
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Live websites built for clients
          </p>
        </motion.div>

        {clientWebsites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientWebsites.map((site, idx) => (
              <ProjectCard
                key={idx}
                project={site}
                idx={idx}
                hovered={clientHovered}
                setHovered={setClientHovered}
                external
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 py-16 px-6 text-center text-gray-400 dark:text-gray-600"
          >
            <span className="text-3xl mb-3">🔒</span>
            <p className="text-sm sm:text-base font-medium">Coming soon</p>
            <p className="text-xs sm:text-sm mt-1">
              Client sites will be listed here once published.
            </p>
          </motion.div>
        )}
      </section>
    </>
  );
}