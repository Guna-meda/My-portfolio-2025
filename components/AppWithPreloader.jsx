"use client";
import { useEffect, useState } from "react";

export default function AppWithPreloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    let current = 0;
    const interval = setInterval(() => {
      current += 2; // speed of percentage increase
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300); // small delay after reaching 100
      }
      setProgress(current);
    }, 30); // speed of update

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-500">
          <CircularLoader progress={progress} />
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}

function CircularLoader({ progress }) {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Static circle background */}
      <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
      {/* Animated spinning arc */}
      <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      {/* Percentage text */}
      <span className="text-white text-lg font-bold">{progress}%</span>
    </div>
  );
}
