"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="relative z-20 w-full px-6 text-center text-4xl font-bold">
      <MaskContainer
        revealText={
          <p className="text-center text-5xl font-bold text-slate-800 dark:text-white px-4">
            Hey there 👋, I'm Guna — mostly a thinker, sometimes a coder.
          </p>
        }
        className="absolute inset-0 w-full h-full text-white dark:text-black"
      >
        Turning ideas into{" "}
        <span className="text-blue-500">beautiful, functional apps</span> — blending modern design with{" "}
        <span className="text-blue-500">clean, efficient code</span>.
      </MaskContainer>
    </div>
  );
}
