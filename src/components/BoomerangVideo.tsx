"use client";

import { useEffect, useRef } from "react";

export default function BoomerangVideo({
  src,
  className = "",
  playbackRate = 0.55,
}: {
  src: string;
  className?: string;
  playbackRate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let direction: 1 | -1 = 1;
    let rafId = 0;
    let reversing = false;

    video.playbackRate = playbackRate;

    const startAt = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = video.duration * 0.15;
      }
      video.play().catch(() => {});
    };

    const stepReverse = () => {
      if (!video.duration) return;
      video.currentTime -= (1 / 30) * playbackRate;
      if (video.currentTime <= 0.05) {
        direction = 1;
        reversing = false;
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }
      rafId = requestAnimationFrame(stepReverse);
    };

    const onEnded = () => {
      direction = -1;
      reversing = true;
      video.pause();
      rafId = requestAnimationFrame(stepReverse);
    };

    const onLoaded = () => startAt();
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);

    if (video.readyState >= 1) startAt();

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
      cancelAnimationFrame(rafId);
      void direction;
      void reversing;
    };
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}
