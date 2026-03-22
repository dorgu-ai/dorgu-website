import { z } from "zod";

export const ROLES = [
  "Individual Developer",
  "Platform Engineer / DevOps",
  "SRE / Reliability Engineer",
  "Engineering Manager / Tech Lead",
  "Student / Learning",
  "Other",
] as const;

export const K8S_EXPERIENCE = [
  "Just getting started / Exploring",
  "Running in development environments",
  "Running in production (1–5 clusters)",
  "Running in production (5+ clusters)",
  "Not using Kubernetes yet",
] as const;

export const PAIN_POINTS = [
  "Writing & maintaining K8s manifests",
  "Cluster bootstrapping & tooling setup",
  "Deployment validation & guardrails",
  "Observability & monitoring setup",
  "GitOps workflow configuration",
  "Resource right-sizing",
  "Security policy enforcement",
  "Onboarding new team members to K8s",
] as const;

export const FEATURES = [
  "AI-powered manifest generation",
  "Blessed Stack (curated production tooling)",
  "Application & Cluster Personas (CRDs)",
  "Real-time platform dashboard",
  "Compliance templates (Pro)",
  "Multi-cluster management (Enterprise)",
  "LLM-powered root cause analysis (Pro)",
] as const;

export const SANDBOX_OPTIONS = [
  "Yes, this would be very valuable",
  "Somewhat — depends on the implementation",
  "No, we already have a solution for this",
  "Not sure / Need to learn more",
] as const;

export const REFERRAL_SOURCES = [
  "GitHub",
  "Twitter/X",
  "Reddit",
  "HackerNews",
  "Friend/Colleague",
  "Search",
  "Other",
] as const;

export const waitlistSchema = z.object({
  role: z.enum(ROLES),
  roleOther: z.string().optional(),
  k8sExperience: z.enum(K8S_EXPERIENCE),
  painPoints: z.array(z.enum(PAIN_POINTS)).min(1).max(3),
  features: z.array(z.enum(FEATURES)).min(1),
  sandboxInterest: z.enum(SANDBOX_OPTIONS),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Phone number is required"),
  company: z.string().optional(),
  referralSource: z.enum(REFERRAL_SOURCES).optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
