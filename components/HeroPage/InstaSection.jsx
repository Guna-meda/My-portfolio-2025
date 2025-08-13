"use client";
import { Highlighter } from "@/components/magicui/highlighter";
import Image from "next/image";

const InstaSection = () => {
  return (
    <div className="flex flex-col gap-6"> {/* reduced from gap-12 */}
      {/* Heading */}
      <div className="flex justify-center items-center py-4 px-4"> {/* reduced py-8 to py-4 */}
        <p
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-snug 
          text-gray-900 dark:text-white transition-colors duration-300"
        >
          A{" "}
          <Highlighter action="underline" color="#FF9800">
            Digital Creator too
          </Highlighter>
          , check out{" "}
          <Highlighter action="highlight" color="#87CEFA">
            my Insta.
          </Highlighter>
        </p>
      </div>

      {/* Insta Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4"> {/* reduced gap-10 to gap-6 */}
        {/* Left - Phone Image */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative">
            <Image
              src="/Phone.png"
              alt="Instagram Screenshot"
              width={360} // slightly smaller
              height={720}
              priority
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] dark:brightness-110
                         sm:w-[300px] md:w-[360px] lg:w-[400px]"
            />
          </div>
        </div>

        {/* Right - Handle */}
        <div className="text-center md:text-left max-w-sm"> {/* reduced max width */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            @gunaunfiltered
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-1"> {/* reduced font + margin */}
Join the fun — stories, reels, and a peek into my world.          </p>
        </div>
      </div>
    </div>
  );
};

export default InstaSection;
