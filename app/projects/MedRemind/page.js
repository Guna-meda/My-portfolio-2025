"use client";

import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function MedRemindProjectPage() {
  const images = [
    "/images/MedRemind.png",
    "/images/medremind2.png",
  ];

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
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row items-center lg:items-start gap-10 p-6 md:p-10 mt-20">

      {/* LEFT SECTION */}
      <div className="flex flex-col w-full lg:w-1/2 gap-5">

        <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400">
          MedRemind – Smart Medication Reminder App
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          <strong>MedRemind</strong> is a real-time medication management app that ensures
          users never miss their medicines by using exact-time alarms instead of
          unreliable notifications. It allows users to schedule reminders, track dosage
          history, and manage refills with a seamless and modern experience.
        </p>

        {/* Features */}
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Exact-time Android alarm reminders</li>
          <li>Multiple daily medicine scheduling</li>
          <li>Medication history tracking</li>
          <li>Refill reminder system</li>
          <li>Biometric authentication</li>
          <li>Persistent alarms after device reboot</li>
          <li>Foreground alarm service for reliability</li>
        </ul>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mt-3">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            React Native, Expo, TypeScript, Kotlin (Android Native Modules)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap">

          <a
            href="https://github.com/Guna-meda/Medremind-upgraded"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition hover:scale-105"
          >
            <FaGithub /> Code
          </a>

          <a
            href="https://www.linkedin.com/posts/gunavathi-mi_reactnative-kotlin-mobiledevelopment-ugcPost-7460230030271348737--R7m"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition hover:scale-105"
          >
            <FaLinkedin /> View Post
          </a>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">

        {/* Image Carousel */}
        <div className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">

          <img
            src={images[currentImageIndex]}
            alt={`MedRemind image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            <FaArrowRight />
          </button>

        </div>
      </div>

    </div>
  );
}