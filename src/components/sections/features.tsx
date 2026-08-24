"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HeartPulse,
  UserCheck,
  History,
  KeyRound,
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
    icon: HeartPulse,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "AI Self-Healing",
    description:
      "Detect, diagnose, propose, approve, heal, remember. Dorgu spots OOMKills, crash loops, saturation, and node or control-plane trouble, works out the root cause, and writes an ordered plan. Every step carries its rationale, risk level, and a YAML diff you can read before anything happens.",
    tag: "the loop",
    colSpan: "md:col-span-2",
  },
  {
    icon: UserCheck,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    title: "Human-in-the-loop by default",
    description:
      "Every remediation is approval-gated. Resource changes are capped at 2× blast radius, limited to 5 per app per hour, and kube-system is always excluded. If health regresses after a fix, Dorgu rolls it back automatically.",
    tag: "approval required",
  },
  {
    icon: History,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    title: "Incident memory",
    description:
      "IncidentMemory and RemediationAction CRDs keep the signal, the root cause, the confidence, the plan, and the outcome as first-class cluster objects. Organizational memory that outlives the Slack thread and feeds the next diagnosis.",
    tag: "IncidentMemory CRD",
  },
  {
    icon: KeyRound,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
    title: "Your cluster, your keys",
    description:
      "Apache-2.0 and self-hosted. AI is optional and bring-your-own Anthropic key. Detection, diagnosis, and remediation all work rule-based with no key at all. Your incidents stay as CRDs in your cluster. No lock-in.",
    tag: "Apache 2.0",
  },
  {
    icon: Shield,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    title: "Kubernetes Operator",
    description:
      "Validate deployments against personas. Advisory or enforcing webhooks, Prometheus-based resource learning, ArgoCD sync tracking. It never creates or modifies your workloads, only the persona and incident records, and its ClusterRole is published so you can check that rather than take our word for it.",
    tag: "Operator",
  },
  {
    icon: Fingerprint,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    title: "Application Personas",
    description:
      "Give your apps identity. ApplicationPersona CRDs capture what your app needs (resources, scaling, health, dependencies, ownership) and give every signal something to correlate to.",
    tag: "CRD",
  },
  {
    icon: Brain,
    iconColor: "text-teal-500",
    iconBg: "bg-teal-500/10",
    title: "Cluster Personas",
    description:
      "Give your cluster a soul. ClusterPersona CRDs auto-discover nodes, addons, capacity, and state: the cluster context the AI plans against.",
    tag: "ClusterPersona CRD",
  },
  {
    icon: Sparkles,
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-500/10",
    title: "AI Manifest Generation",
    description:
      "Getting started from scratch? Point dorgu at your Dockerfile or Compose file for production-ready Deployments, Services, Ingress, HPA, ArgoCD config, CI/CD workflows, and a matching persona.",
    tag: "dorgu generate",
  },
  {
    icon: Layers,
    iconColor: "text-lime-600",
    iconBg: "bg-lime-500/10",
    title: "Cluster Setup Wizard",
    description:
      "Bootstrap a production stack in minutes. cert-manager, ingress-nginx, CloudNativePG, OpenObserve, Argo CD, External Secrets, with an educational wizard that teaches as it installs. Or scaffold it as an ArgoCD App-of-Apps repository and let your own GitOps pipeline reconcile it.",
    tag: "Blessed Stack",
  },
  {
    icon: GitBranch,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
    title: "It won't fight your pipeline",
    description:
      "Dorgu detects who owns each workload and refuses to patch one that Helm, ArgoCD or Flux reconciles. Patching it would claim those fields away from your deployment tool and make your next helm upgrade fail outright. So Dorgu names the release or application that owns it and tells you which value to change in your chart or your Git repo. Where it does patch, it removes its own field manager afterwards, so it leaves no ownership footprint behind. Your source of truth stays the source of truth.",
    tag: "Helm, ArgoCD, Flux",
  },
  {
    icon: Monitor,
    iconColor: "text-sky-500",
    iconBg: "bg-sky-500/10",
    title: "Platform Dashboard",
    description:
      "A live view of your cluster: nodes, capacity, addons, and ClusterPersona state over WebSockets. Incidents and remediations are reviewed from the CLI today.",
    tag: "dorgu platform serve",
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
            An AI SRE for teams without an SRE
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Kubernetes restarts a crash-looping pod forever and never asks why.
            Dorgu asks, then shows you the fix and waits for your call.
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
