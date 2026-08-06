"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const POSTER_SRC = "/hero-poster.jpg";
const WEBM_SRC = "/hero-loop.webm";
const MP4_SRC = "/hero-loop.mp4";

/** Intrinsic size of the capture — reserved up front so the loop causes no layout shift. */
const MEDIA_WIDTH = 1280;
const MEDIA_HEIGHT = 724;

const MEDIA_LABEL =
  "Terminal recording: Dorgu detects an OOMKilled workload, diagnoses the root cause, proposes a fix, and heals the deployment after approval.";

/**
 * The hero demo loop. Silent, muted, and looping — it carries no audio track.
 * Users who ask for reduced motion get the still poster instead of the video.
 */
export function HeroMedia({ className }: { className?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const frameClassName = cn(
    "relative w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl",
    className
  );

  if (prefersReducedMotion) {
    return (
      <div className={frameClassName}>
        <Image
          src={POSTER_SRC}
          alt={MEDIA_LABEL}
          width={MEDIA_WIDTH}
          height={MEDIA_HEIGHT}
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className={frameClassName}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
        width={MEDIA_WIDTH}
        height={MEDIA_HEIGHT}
        aria-label={MEDIA_LABEL}
        className="h-auto w-full"
      >
        <source src={WEBM_SRC} type="video/webm" />
        <source src={MP4_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
