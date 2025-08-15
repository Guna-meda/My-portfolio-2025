"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { motion } from "framer-motion";

export function HeroScrollDemo() {
  const videos = [
    {
      title: "Checkout few",
      subtitle: "Video demonstration of some of my work",
      src: "/vid1.mp4",
    },
    {
      title: "Another example",
      subtitle: "Showcasing my recent work",
      src: "/vid2.mp4",
    },
  ];

  return (
    <>
      {/* Desktop / Large Screens - Original Animation */}
      <div className="hidden lg:flex flex-col overflow-hidden gap-8">
        {videos.map((vid, i) => (
          <ContainerScroll
            key={i}
            className="!py-8"
            titleComponent={
              <h1 className="text-4xl font-semibold text-black dark:text-white text-center leading-tight">
                {vid.title} <br />
                <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
                  {vid.subtitle}
                </span>
              </h1>
            }
          >
            <video
              src={vid.src}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              controls
              playsInline
              muted
              autoPlay
              loop
              draggable={false}
            />
          </ContainerScroll>
        ))}
      </div>

      {/* Mobile & Medium Screens - Tablet Style */}
      <div className="flex flex-col gap-8 lg:hidden px-4 mb-20">
        {videos.map((vid, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-background shadow-xl rounded-[2rem] overflow-hidden 
                       border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {vid.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {vid.subtitle}
              </p>
            </div>

            {/* Video */}
            <div className="w-full bg-black">
              <video
                src={vid.src}
                className="w-full h-auto object-contain"
                controls
                playsInline
                muted
                autoPlay
                loop
                draggable={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
