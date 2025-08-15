"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function YouTube3xPlayerPage() {
  return (
    <section className="w-full py-12 px-8 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mt-12 mb-4">
          YouTube 3x Player
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-8">
          Paste a YouTube link and watch videos at speeds up to 3x. Includes
          watch history so you can revisit videos anytime.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <Image
              src="/images/yt-2.png" // replace with your image
              alt="YouTube 3x Player Screenshot 1"
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <Image
              src="/images/yt-1.png" // replace with your image
              alt="YouTube 3x Player Screenshot 2"
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* GitHub Link */}
        <div>
          <a
            href="https://github.com/Guna-meda/YT-Player"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-900 transition"
          >
            <FaGithub className="text-xl" />
            View Code on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
