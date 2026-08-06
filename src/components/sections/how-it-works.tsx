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
    command:
      "helm install dorgu-operator oci://ghcr.io/dorgu-ai/dorgu-operator-charts/dorgu-operator --set healthCheck.enabled=true",
    description:
      "One Helm command, in your own cluster. Add an Anthropic key if you want AI diagnosis and AI-written plans — everything works rule-based without one.",
  },
  {
    number: 2,
    title: "Dorgu detects",
    command: "dorgu incidents list",
    description:
      "The health-check reconciler watches for OOMKills, crash loops, image-pull failures, CPU and memory saturation, and node or control-plane trouble — every 60s by default, or 30s for a tight loop. Each signal opens an IncidentMemory.",
  },
  {
    number: 3,
    title: "AI diagnoses",
    command: "dorgu incidents describe oom-api-server -n production",
    description:
      "Deterministic rules produce a root cause and a confidence score. With a key configured, Claude enhances that with cluster context. Any AI failure degrades to the rules — it never blocks the loop.",
  },
  {
    number: 4,
    title: "It proposes a fix",
    command: "dorgu remediation diff fix-oom-api-server -n production",
    description:
      "An ordered, reviewable plan lands as a RemediationAction — every step with its rationale, risk level, and a YAML diff. Capped at 2× blast radius, 5 remediations per app per hour, kube-system excluded.",
  },
  {
    number: 5,
    title: "You approve — it heals",
    command: "dorgu remediation approve fix-oom-api-server -n production",
    description:
      "Nothing is applied until you say so. The operator patches the persona's desired state; the CLI patches the Deployment with your credentials. If health regresses during the verification window, Dorgu rolls it back.",
  },
  {
    number: 6,
    title: "It remembers",
    command: "dorgu incidents list --all -n production",
    description:
      "The signal, the root cause, the plan, and the outcome persist as CRDs in your cluster — and become context the next proposal is written against.",
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
      className="rounded-lg px-4 py-3 font-mono text-sm break-words"
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
              From failure to fix, in six steps
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Detect, diagnose, propose, approve, heal, remember.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Code detects. AI explains. A human approves. Nothing touches your
              workloads until you say so — and every command is readable, every
              record stays in your cluster.
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
