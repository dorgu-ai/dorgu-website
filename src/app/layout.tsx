import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Dorgu — Open-source AI SRE for Kubernetes";
const SITE_DESCRIPTION =
  "Dorgu detects what's wrong in your Kubernetes cluster, diagnoses the root cause with AI, proposes a reviewable fix, and heals it once you approve. Open source, runs in your own cluster.";
const SOCIAL_DESCRIPTION =
  "Detect, diagnose with AI, propose a reviewable fix, heal on your approval. Open source, runs in your own cluster.";
const SOCIAL_IMAGE = {
  url: "/hero-poster.jpg",
  width: 1280,
  height: 724,
  alt: "Dorgu diagnosing an OOMKilled workload and proposing a fix from the terminal",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dorgu.run"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "ai sre",
    "kubernetes self-healing",
    "incident remediation",
    "root cause analysis",
    "aiops",
    "kubernetes operator",
    "OOMKilled",
    "CrashLoopBackOff",
    "kubernetes",
    "k8s",
    "sre",
    "devops",
    "platform engineering",
    "open source",
  ],
  icons: {
    icon: "/mascot.jpg",
    apple: "/mascot.jpg",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "https://dorgu.run",
    siteName: "Dorgu",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
