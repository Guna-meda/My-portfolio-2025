"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function IntervuAIProjectPage() {
  const images = [
    "/images/intervu-1.png",
    "/images/intervu2.png",
    "/images/intervu3.png",
    "/images/intervu4.png",
  ];

  const videoSrc = "/vids/intervu.mp4";
  const liveLink = "https://intervuai.vercel.app"; // change if needed

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

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col gap-12 p-6 md:p-10 mt-20">

      {/* 🔥 HERO SECTION */}
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
          IntervuAI – AI Mock Interview Platform
        </h1>

        <p className="max-w-2xl text-muted-foreground">
          Practice interviews with AI in real-time. Get instant feedback, improve
          your skills, and prepare for real-world technical and HR rounds.
        </p>

        {/* Big Preview */}
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
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

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://intervu-ai-eta.vercel.app"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
          >
            <FaExternalLinkAlt /> Try It Out
          </a>

          
        </div>
      </div>

      {/* 🔽 MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">

        {/* 📸 LEFT - Carousel + Video */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* Image Carousel */}
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`IntervuAI ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

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

        
        </div>

        {/* 🧠 RIGHT - Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            About the Project
          </h2>

          <p className="text-muted-foreground">
            <strong>IntervuAI</strong> is an AI-powered mock interview platform that
            simulates real interview scenarios using voice interaction. It analyzes
            your responses, communication style, and confidence to give meaningful feedback.
          </p>

          {/* Features */}
          <ul className="list-disc pl-6 text-muted-foreground">
            <li>AI-generated interview questions</li>
            <li>Real-time voice interaction</li>
            <li>Speech-to-text analysis</li>
            <li>Performance feedback & insights</li>
            <li>Multiple roles & difficulty levels</li>
          </ul>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-4">
              Tech Stack
            </h3>
            <p className="text-muted-foreground">
              React, WebRTC, Node.js, Express, OpenAI APIs, Firebase
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}