"use client";

import { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import RotatingText from "../ui/RotatingText";
import InstaSection from "../HeroPage/InstaSection";

const VidCreator = () => {
  const videos = [
    { src: "/vids/vid-horiz-1.mp4", ratio: "landscape" },
    { src: "/vids/vid-vertical-1.mp4", ratio: "portrait" },
    { src: "/vids/vid-horz-2.mp4", ratio: "landscape" },
    { src: "/vids/vid-vertical-2.mp4", ratio: "portrait" },
    { src: "/vids/vid-horiz-3.mp4", ratio: "landscape" },
    { src: "/vids/vid-vertical-3.mp4", ratio: "portrait" },
    { src: "/vids/vid-horiz-4.mp4", ratio: "landscape" },
    { src: "/vids/vid-horzi-5.mp4", ratio: "landscape" },
  ];

  const VideoCard = ({ src, ratio }) => {
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, []);

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
      }
    };

    return (
    <div className="relative overflow-hidden rounded-xl shadow-lg break-inside-avoid mx-auto max-w-[300px]">
  <video
    ref={videoRef}
    src={src}
    autoPlay
    loop
    muted
    playsInline
    className={`w-full h-auto object-cover ${
      ratio === "landscape" ? "aspect-video" : "aspect-[9/16]"
    }`}
  />
  <button
    onClick={toggleMute}
    className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 transition-colors text-white p-2 rounded-full"
  >
    {muted ? <FaVolumeMute /> : <FaVolumeUp />}
  </button>
</div>

    );
  };

  return (
    <>
      {/* Heading Section */}
      <section className="w-full mt-16 mb-8 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-3 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Not just a
          </h2>

          <RotatingText
            texts={[
              "Full-stack developer !",
              "Content Creator !",
              "Social media Manager !",
              "Video editor !",
            ]}
            mainClassName="inline-block px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-extrabold text-2xl sm:text-3xl md:text-4xl shadow-sm"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </section>

      {/* Video Masonry Section */}
      <section className="px-2 sm:px-4 lg:px-8 flex justify-center mb-8">
  <div className="columns-2 sm:columns-2 md:columns-3 gap-4 sm:gap-6 space-y-4">
    {videos.map((video, index) => (
      <VideoCard key={index} src={video.src} ratio={video.ratio} />
    ))}
  </div>
</section>

    </>
  );
};

export default VidCreator;
