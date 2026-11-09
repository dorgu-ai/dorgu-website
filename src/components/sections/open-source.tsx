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

const INCLUDED = [
  "The full loop: detect, diagnose, propose, you approve, apply, verify",
  "AI diagnosis and AI-written remediation plans (bring your own Anthropic key)",
  "Rule-based detection, diagnosis, and remediation with no AI key at all",
  "Guardrails: human approval re-checked on the live cluster, 2× blast-radius cap, rate limits, protected namespaces, persona rollback",
  "Advisory steps for Helm, Argo CD and Flux workloads, applied only to workloads nothing else owns",
  "CLI: health, incidents, remediation (diff / approve / reject / heal), persona import, report",
  "Kubernetes Operator (persona validation, self-healing loop, published ClusterRole)",
  "ArgoCD + Prometheus integration",
  "Community support",
];

const CONTACT_HREF = "mailto:team@dorgu.run";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function OpenSource() {
  return (
    <section id="open-source" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Free and open source
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Dorgu is Apache-2.0 and runs in your own cluster. There is nothing
            to buy.
          </p>
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Card className="relative flex flex-col border-2 border-primary shadow-md">
            <CardHeader className="border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  Dorgu (open source)
                </CardTitle>
                <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  Apache 2.0
                </span>
              </div>
              <p className="mt-2 text-2xl font-bold text-foreground">Free</p>
            </CardHeader>

            <CardContent className="flex flex-col gap-6 pt-4">
              <ul className="flex flex-col gap-2.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Running Dorgu on a team?{" "}
          <Link
            href={CONTACT_HREF}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Talk to us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
