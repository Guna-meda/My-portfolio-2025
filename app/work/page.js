"use client";

import InstaSection from "@/components/HeroPage/InstaSection";
import SplitText from "@/components/ui/SplitText";
import Projects from "@/components/work/Projects";
import VidCreator from "@/components/work/Vidcreator";

export default function Page() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-12 sm:py-16">
        <SplitText
          text="Heyy, checkout my work"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 leading-tight"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      {/* Projects Section */}
      <div className="mt-8 sm:mt-12">
        <Projects />
      </div>

      {/* GitHub Contribution Tab */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <div className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-2 w-full max-w-4xl">
          <div className="rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
            <img
              src="/images/github.png"
              alt="GitHub Contributions"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Video Creator Section */}
      <div className="mt-12 sm:mt-16">
        <VidCreator />
      </div>

      {/* Instagram Section */}
      <div className="mt-12 sm:mt-16 pb-16">
        <InstaSection />
      </div>
    </div>
  );
}
