"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="w-full px-6 text-center text-6xl font-extrabold text-slate-800 dark:text-white">
            Hey there 👋, I'm Guna — mostly a thinker, sometimes a coder.<br />
            <span className="block text-4xl font-bold mt-4">(a solid editor too)</span>
          </p>
        }
        className="absolute inset-0 w-full h-full text-white dark:text-black"
      >
        Turning ideas into{" "}
        <span className="text-blue-500">beautiful, functional apps</span> — blending modern design with{" "}
        <span className="text-blue-500">clean, efficient code</span>.
      </MaskContainer>

      {/* Overlay social links */}
      <div className="absolute bottom-10 flex gap-4 z-10">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}
