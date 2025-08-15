"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import VideoSection from "./VideoSection";
import InstaSection from "./InstaSection";
import SkillsSection from "./SkillsSection";
import WorkAndAboutSection from "./WorkAndAboutSection";

export default function HeroSection() {
  return (
    <>
     <section
  className="relative w-full 
             min-h-[50vh] sm:min-h-[60vh] md:h-screen 
             bg-background flex flex-col items-center justify-center 
             text-center overflow-hidden px-4 
             py-12 sm:py-20 md:py-24"
>
  <MaskContainer
    revealText={
      <p className="w-full px-4 text-center 
                    text-3xl sm:text-4xl md:text-6xl 
                    font-extrabold text-slate-800 dark:text-white leading-snug">
        Hey there 👋, I'm Guna — mostly a thinker, sometimes a coder.
        <br />
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold mt-4">
          (a solid editor too)
        </span>
      </p>
    }
    className="absolute inset-0 w-full h-full text-white dark:text-black"
  >
    Turning ideas into{" "}
    <span className="text-blue-500">beautiful, functional apps</span> — blending modern design with{" "}
    <span className="text-blue-500">clean, efficient code</span>.
  </MaskContainer>
</section>


      <div>
        <VideoSection />
        <InstaSection />
        <SkillsSection />
        <WorkAndAboutSection />
      </div>
    </>
  );
}
