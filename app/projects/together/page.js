"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

export default function TogethrProjectPage() {
  const images = [
    "/images/Together.png",
    "/images/together1.png",
    "/images/together2.png",
    "/images/together3.png",
    "/images/together4.png",
    "/images/together5.png",
  ];

  const videoSrc = "/vids/together.mp4";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [currentImageIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 md:p-10 mt-20">
      
      {/* Left - Project Info */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4 order-2 lg:order-1">
        <h1 className="text-3xl font-bold  text-blue-600 dark:text-blue-400">Togethr – Real-Time Team Collaboration Tool</h1>
        
        <p className="text-muted-foreground">
          <strong>Togethr</strong> is a modern real-time collaboration tool where users can
          create or join teams, manage both personal and team tasks, assign tasks to members, and
          chat with their teams — all in one place.  
          The platform includes authentication, team management, and an intuitive Kanban board
          for task organization.
        </p>

        {/* Features */}
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Create & join multiple teams</li>
          <li>Personal and team task boards</li>
          <li>Assign tasks to specific members</li>
          <li>Real-time team chat</li>
          <li>Authentication & secure access</li>
        </ul>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold  text-blue-600 dark:text-blue-400 mt-4">Tech Stack</h2>
          <p className="text-muted-foreground">
            React, Firebase, Zustand, Tailwind CSS
          </p>
        </div>

        {/* Code Link */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/Guna-meda/Togethr"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>

      {/* Right - Media Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
        
        {/* Image Carousel */}
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={`Togethr image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Video Section */}
        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
  <video
    src={videoSrc}
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </div>
  );
}
