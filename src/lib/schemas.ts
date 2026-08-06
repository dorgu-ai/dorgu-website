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
  "Diagnosing production incidents (OOMKilled, CrashLoopBackOff)",
  "Repeating the same manual fixes over and over",
  "No dedicated SRE, on-call falls on the dev team",
  "Resource right-sizing",
  "Deployment validation & guardrails",
  "Writing & maintaining K8s manifests",
  "Cluster bootstrapping & tooling setup",
  "Observability & monitoring setup",
  "GitOps workflow configuration",
  "Security policy enforcement",
] as const;

export const FEATURES = [
  "AI self-healing (detect → diagnose → propose → approve → heal)",
  "Human-in-the-loop approval & guardrails",
  "AI root cause analysis (bring your own Anthropic key)",
  "Incident memory & remediation history in the cluster",
  "AI-powered manifest generation",
  "Application & Cluster Personas (CRDs)",
  "Blessed Stack (curated production tooling)",
  "Real-time platform dashboard",
  "Auto-approve rules for remediations (planned)",
  "Multi-cluster management (Enterprise, planned)",
] as const;

export const SANDBOX_OPTIONS = [
  "Yes, this would be very valuable",
  "Somewhat, depends on the implementation",
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
