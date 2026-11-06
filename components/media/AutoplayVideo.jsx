"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

/**
 * Lazy, muted-autoplay YouTube embed.
 * - Poster + play icon first; iframe is only mounted once ≥50% in view.
 * - Pauses when scrolled out of view, resumes on return (postMessage API).
 * - Starts muted (browser policy) with a "Tap to unmute" button.
 * - prefers-reduced-motion: no autoplay, poster stays until the user clicks.
 */
export default function AutoplayVideo({ id, title }) {
  const wrapRef = useRef(null);
  const iframeRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [posterSrc, setPosterSrc] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const reducedRef = useRef(false);
  const readyRef = useRef(false);

  const post = useCallback((func, args = []) => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ event: "command", func, args }), "*");
  }, []);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedRef.current) return; // poster only until user clicks play

    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          if (readyRef.current) post("playVideo");
        } else if (readyRef.current) {
          post("pauseVideo");
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [post]);

  const onIframeLoad = () => {
    readyRef.current = true;
    // Subscribe to the player so enablejsapi commands are accepted.
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*");
  };

  const unmute = () => {
    post("unMute");
    post("setVolume", [100]);
    post("playVideo");
    setMuted(false);
  };
  const mute = () => {
    post("mute");
    setMuted(true);
  };

  const src =
    `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}` +
    `&playsinline=1&controls=1&rel=0&modestbranding=1&enablejsapi=1`;

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={wrapRef}
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-black shadow-lg"
      >
        {mounted ? (
          <iframe
            ref={iframeRef}
            src={src}
            title={title}
            onLoad={onIframeLoad}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setMounted(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 h-full w-full focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterSrc}
              alt={`${title} — video thumbnail`}
              width={1280}
              height={720}
              loading="lazy"
              onError={() => {
                const fb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                if (posterSrc !== fb) setPosterSrc(fb);
              }}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-transform group-hover:scale-110 motion-reduce:transition-none">
              <FaPlay className="ml-1" aria-hidden="true" />
            </span>
          </button>
        )}

        {mounted && (
          <button
            type="button"
            onClick={muted ? unmute : mute}
            className="absolute left-3 top-3 z-10 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-black/70 px-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-white"
          >
            {muted ? <FaVolumeMute aria-hidden="true" /> : <FaVolumeUp aria-hidden="true" />}
            {muted ? "Tap to unmute" : "Mute"}
          </button>
        )}
      </div>

      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] items-center self-start text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        Watch on YouTube ↗
      </a>
    </div>
  );
}
