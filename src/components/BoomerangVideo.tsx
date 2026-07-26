"use client";

import { useEffect, useRef } from "react";

export default function BoomerangVideo({
  src,
  className = "",
  playbackRate = 0.55,
  playing = true,
}: {
  src: string;
  className?: string;
  playbackRate?: number;
  playing?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;

    const startAt = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = video.duration * 0.15;
      }
      if (playing) {
        video.playbackRate = playbackRate;
        video.play().catch(() => {});
      }
    };

    const stepReverse = () => {
      if (!video.duration) return;
      video.currentTime -= (1 / 30) * playbackRate;
      if (video.currentTime <= 0.05) {
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }
      rafId = requestAnimationFrame(stepReverse);
    };

    const onEnded = () => {
      video.pause();
      rafId = requestAnimationFrame(stepReverse);
    };

    const onLoaded = () => startAt();
    video.addEventListener("loadedmetadata", onLoaded);
    if (playing) video.addEventListener("ended", onEnded);

    if (video.readyState >= 1) startAt();

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
      cancelAnimationFrame(rafId);
    };
  }, [playbackRate, playing]);

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
