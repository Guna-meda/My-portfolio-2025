"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function FollowPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Auto close after countdown
  useEffect(() => {
    if (!isOpen) return;
    if (countdown === 0) {
      setIsOpen(false);
      return;
    }
    const countdownTimer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [countdown, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-neutral-900 text-white p-6 rounded-xl shadow-lg relative w-[90%] max-w-md">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-center">
            It looks like you like my work!
        </h2>
        <p className="text-center text-gray-400 mb-4">
                    Let’s connect on LinkedIn!
        </p>

        {/* Button */}
        <a
          href="https://www.linkedin.com/in/your-username/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:opacity-90"
        >
          Follow on LinkedIn
        </a>

        {/* Countdown */}
        <p className="text-center text-sm text-gray-500 mt-3">
          Closing in {countdown}s
        </p>
      </div>
    </div>
  );
}
