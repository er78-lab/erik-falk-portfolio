"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  src: string;
  poster: string;
  label?: string;
  className?: string;
  aspectClassName?: string;
  overlay?: React.ReactNode;
};

export default function VideoPlayer({
  src,
  poster,
  label = "PLAY",
  className = "",
  aspectClassName = "aspect-video",
  overlay,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative overflow-hidden bg-black ${aspectClassName} ${className}`}>
        <video
          className="h-full w-full"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${label} abspielen`}
      className={`group relative block w-full overflow-hidden bg-black ${aspectClassName} ${className}`}
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover opacity-90 transition-opacity group-hover:opacity-70"
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 transition-transform group-hover:scale-105">
          <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="text-xs font-medium tracking-[0.2em]">{label}</span>
      </span>
      {overlay && <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">{overlay}</div>}
    </button>
  );
}
