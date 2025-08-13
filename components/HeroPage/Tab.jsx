"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden gap-8"> {/* reduced gap */}
      
      {/* First Tab */}
      <ContainerScroll
        className="!py-8" // reduce top & bottom padding
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-white text-center leading-tight">
            Checkout few <br />
            <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
              Video demonstration of some of my work
            </span>
          </h1>
        }
      >
        <video
          src="/vid1.mp4"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          controls
          playsInline
          muted
          autoPlay
          loop
          draggable={false}
        />
      </ContainerScroll>

      {/* Second Tab */}
      <ContainerScroll
        className="!py-8" // reduced padding
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-white text-center leading-tight">
            Another example <br />
            <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none">
              Showcasing my recent work
            </span>
          </h1>
        }
      >
        <video
          src="/vid2.mp4"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          controls
          playsInline
          muted
          autoPlay
          loop
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
