"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Step = {
  number: number;
  title: string;
  command: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    title: "Install",
    command: "go install github.com/dorgu-ai/dorgu/cmd/dorgu@latest",
    description:
      "Install the dorgu CLI via Go. No containers, no package managers — a single binary on your PATH.",
  },
  {
    number: 2,
    title: "Generate",
    command: "dorgu generate ./my-app",
    description:
      "Point dorgu at your project. It reads your Dockerfile or Compose file and outputs production-ready Kubernetes manifests, ArgoCD config, and a persona doc.",
  },
  {
    number: 3,
    title: "Bootstrap",
    command: "dorgu cluster setup",
    description:
      "Walk through the interactive wizard to install the blessed stack: cert-manager, ingress-nginx, Argo CD, External Secrets, and more — with explanations at every step.",
  },
  {
    number: 4,
    title: "Visualize",
    command: "dorgu platform serve",
    description:
      "Launch the real-time dashboard. See your cluster, nodes, application personas, and addon health all in one place via live WebSocket updates.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function TerminalBlock({ command }: { command: string }) {
  return (
    <div
      className="rounded-lg px-4 py-3 font-mono text-sm"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <span style={{ color: "#4ade80" }}>$</span>{" "}
      <span style={{ color: "#e5e7eb" }}>{command}</span>
    </div>
  );
}

function StepItem({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <motion.div variants={stepVariants} className="relative flex gap-5">
      {/* Step number + connecting line */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            "border-2 border-primary bg-primary text-primary-foreground",
            "text-sm font-bold"
          )}
        >
          {step.number}
        </div>
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={cn("flex flex-col gap-3 pb-10", isLast && "pb-0")}>
        <h3 className="pt-1 text-base font-semibold text-foreground">
          {step.title}
        </h3>
        <TerminalBlock command={step.command} />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left: header */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Four commands. That&apos;s all it takes.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              dorgu is designed around a simple principle: powerful defaults
              with zero magic. Every command is readable, every output is yours.
            </p>
          </div>

          {/* Right: steps */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {STEPS.map((step, index) => (
              <StepItem
                key={step.number}
                step={step}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
