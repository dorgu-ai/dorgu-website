"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FREE_FEATURES = [
  "The full self-healing loop: detect, diagnose, propose, approve, heal, remember",
  "AI diagnosis and AI-written remediation plans (bring your own Anthropic key)",
  "Rule-based detection, diagnosis, and remediation with no AI key at all",
  "Guardrails: approval-gated, 2× blast-radius cap, rate limits, auto-rollback",
  "Full CLI: generate, init, persona, cluster, health, incidents, remediation (diff / approve / heal), watch, sync",
  "Full Kubernetes Operator (validation, personas, self-healing)",
  "Cluster setup wizard (Blessed Stack)",
  "Platform dashboard",
  "ArgoCD + Prometheus integration",
  "Community support",
];

const PRO_FEATURES = [
  "Everything in Free, plus:",
  "Security policy generation (NetworkPolicy)",
  "Compliance templates (PCI-DSS, SOC2)",
  "Auto-approve rules for remediations",
  "Slack/Teams notifications",
  "Priority support",
];

const ENTERPRISE_FEATURES = [
  "Everything in Pro, plus:",
  "Multi-cluster management",
  "SSO / SAML / OIDC",
  "Compliance-grade audit logging",
  "Custom integrations",
  "On-premise deployment",
  "Dedicated support",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          <span className="text-sm text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            The entire self-healing loop is open source and free forever. Paid
            tiers are on the roadmap, and nothing in them ships today.
          </p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ── Free tier ── */}
          <motion.div variants={cardVariants} className="flex flex-col">
            <Card
              className={cn(
                "relative flex flex-1 flex-col border-2 border-primary shadow-md"
              )}
            >
              {/* "Current" label */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                Current
              </span>

              <CardHeader className="border-b border-border pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    Free (Open Source)
                  </CardTitle>
                  <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    Apache 2.0
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  Free forever
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 pt-4">
                <FeatureList features={FREE_FEATURES} />
              </CardContent>

              <CardFooter>
                <Button
                  size="lg"
                  className="w-full"
                  nativeButton={false}
                  render={
                    <Link
                      href="https://dorguai.mintlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* ── Pro tier ── */}
          <motion.div variants={cardVariants} className="flex flex-col">
            <Card className="relative flex flex-1 flex-col overflow-hidden">
              {/* Coming Soon overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-background/60 backdrop-blur-[2px]" />
              <span className="absolute right-3 top-3 z-20 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground ring-1 ring-border">
                Coming Soon
              </span>

              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="text-lg font-semibold">Pro</CardTitle>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  $49
                  <span className="text-base font-medium text-muted-foreground">
                    /month
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Planned. None of these are available yet.
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 pt-4">
                <FeatureList features={PRO_FEATURES} />
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  nativeButton={false}
                  render={<Link href="#waitlist" />}
                >
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* ── Enterprise tier ── */}
          <motion.div variants={cardVariants} className="flex flex-col">
            <Card className="flex flex-1 flex-col">
              <CardHeader className="border-b border-border pb-4">
                <CardTitle className="text-lg font-semibold">
                  Enterprise
                </CardTitle>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  Custom
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Planned. Talk to us about what you need.
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 pt-4">
                <FeatureList features={ENTERPRISE_FEATURES} />
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  nativeButton={false}
                  render={<Link href="mailto:team@dorgu.run" />}
                >
                  Contact Us
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
