"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/images/spotify.png",
  "/images/spotify-1.png",
  "/images/spotify-2.png",
  "/images/spotify-3.png",
];

export default function SpotifyCloneProject() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 md:p-8 bg-background text-foreground transition-colors">
      {/* Left Carousel */}
      <div className="relative w-full lg:w-1/2 max-w-[600px] aspect-video overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt={`Project screenshot ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Right Content */}
      <div className="mt-6 lg:mt-0 lg:ml-10 w-full lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-[#1DB954]">Spotify Clone </h1>

        <p className="text-base leading-relaxed mb-6">
          A <strong>full-stack music streaming platform</strong> inspired by Spotify,
          featuring user authentication, admin dashboard, music streaming, playlists,
          real-time chat, and friend activity tracking. Built with a modern tech stack
          for high performance and responsiveness across devices.
        </p>

        {/* Links */}
        <div className="space-y-4 mb-6">
          {/* Visit Site */}
          <a
            href="https://spotify-clone-5g33.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Visit Site</p>
                <p className="text-lg font-semibold text-[#1DB954]">
                  spotify-clone-5g33.vercel.app
                </p>
              </div>
              <span className="text-[#1DB954] font-semibold">↗</span>
            </div>
          </a>

          {/* Check Code */}
          <a
            href="https://github.com/Guna-meda/Spotify-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Check Code</p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  https://github.com/Guna-meda/Spotify-clone
                </p>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">↗</span>
            </div>
          </a>
        </div>

        {/* Features */}
        <h2 className="text-xl font-semibold mb-2 text-[#1DB954]">Features</h2>
        <ul className="list-disc list-inside space-y-1 mb-6">
          <li>Music streaming & playlists</li>
          <li>Admin panel for managing albums & songs</li>
          <li>Google sign-in with Clerk</li>
          <li>Real-time chat & friend activity (Socket.io)</li>
        </ul>

        {/* Tech Stack */}
        <h2 className="text-xl font-semibold mb-2 text-[#1DB954]">Tech Stack</h2>
        <p className="mb-2"><strong>Frontend:</strong> React, Vite, Zustand, Clerk, TypeScript, Tailwind CSS</p>
        <p><strong>Backend:</strong> Node.js, Express, MongoDB, Socket.io, Cloudinary</p>
      </div>
    </div>
  );
}
