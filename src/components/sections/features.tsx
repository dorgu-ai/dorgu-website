"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Fingerprint,
  Layers,
  Shield,
  Brain,
  Monitor,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type Feature = {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  tag: string;
  colSpan?: "md:col-span-2";
};

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    title: "AI Manifest Generation",
    description:
      "Point dorgu at your Dockerfile or Compose file. Get production-ready Deployments, Services, Ingress, HPA, ArgoCD config, CI/CD workflows, and a human-readable persona doc.",
    tag: "dorgu generate",
    colSpan: "md:col-span-2",
  },
  {
    icon: Fingerprint,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    title: "Application Personas",
    description:
      "Give your apps identity. ApplicationPersona CRDs capture what your app needs — resources, scaling, health, dependencies, ownership — and persist it in the cluster.",
    tag: "CRD",
  },
  {
    icon: Layers,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    title: "Cluster Setup Wizard",
    description:
      "Bootstrap a production stack in minutes. cert-manager, ingress-nginx, CloudNativePG, OpenObserve, Argo CD, External Secrets — with an educational wizard that teaches as it installs.",
    tag: "Blessed Stack",
  },
  {
    icon: Shield,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
    title: "Kubernetes Operator",
    description:
      "Validate deployments against personas. Advisory or enforcing webhooks, Prometheus-based resource learning, ArgoCD sync tracking — all read-only, never touching your workloads.",
    tag: "Operator",
  },
  {
    icon: Brain,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    title: "Cluster Personas",
    description:
      "Give your cluster a soul. ClusterPersona CRDs auto-discover nodes, addons, capacity, and state — making your cluster self-aware and policy-ready.",
    tag: "ClusterPersona CRD",
  },
  {
    icon: Monitor,
    iconColor: "text-sky-500",
    iconBg: "bg-sky-500/10",
    title: "Platform Dashboard",
    description:
      "Real-time cluster visualization. See nodes, resources, addons, and application health via WebSocket-powered live updates.",
    tag: "dorgu platform serve",
    colSpan: "md:col-span-2",
  },
  {
    icon: GitBranch,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
    title: "GitOps Native",
    description:
      "Generates ArgoCD Applications, scaffolds App-of-Apps directories, respects your GitOps workflows. Helm or declarative — your choice.",
    tag: "ArgoCD",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.li
      variants={cardVariants}
      className={cn("min-h-[14rem] list-none", feature.colSpan)}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              feature.iconBg
            )}
          >
            <Icon className={cn("size-5", feature.iconColor)} />
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-base font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>

          <div className="mt-auto">
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
              {feature.tag}
            </span>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export function Features() {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to ship to Kubernetes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From manifest generation to cluster management — dorgu covers the
            full lifecycle.
          </p>
        </div>

        <motion.ul
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
