"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroMedia } from "@/components/hero-media";
import { cn } from "@/lib/utils";

const DottedSurface = dynamic(
  () =>
    import("@/components/ui/dotted-surface").then((mod) => mod.DottedSurface),
  { ssr: false }
);

const DEMO_VIDEO_URL = "https://youtu.be/lB_529ydWw4";
const DOCS_URL = "https://dorguai.mintlify.app/";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

export function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100dvh-4rem)] items-center pt-16 overflow-hidden",
        className
      )}
    >
      <DottedSurface className="opacity-30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl"
          >
            Your cluster, healing itself —{" "}
            <span className="text-primary">with your approval</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Dorgu watches your cluster, diagnoses failures with AI, proposes a
            reviewable fix, and applies it when you approve. Runs in your own
            cluster. Apache-2.0.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button
              size="lg"
              className="animate-button-glow px-8 py-3 text-base shadow-lg shadow-primary/25"
              nativeButton={false}
              render={<Link href="#waitlist" />}
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <Link
                  href={DEMO_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Watch the 3-min demo
            </Button>
            <Button
              variant="ghost"
              size="lg"
              nativeButton={false}
              render={
                <Link
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Read the docs
            </Button>
          </motion.div>
        </div>

        {/* Demo loop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.18}
          className="w-full lg:max-w-[560px] lg:flex-1"
        >
          <HeroMedia />
        </motion.div>
      </div>
    </section>
  );
}
