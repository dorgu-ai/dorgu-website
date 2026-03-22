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

export const metadata: Metadata = {
  title: "Dorgu — The Understanding Layer for Kubernetes",
  description:
    "AI-powered manifest generation, application personas, and a curated production stack. From Dockerfile to production-ready cluster in minutes.",
  keywords: [
    "kubernetes",
    "k8s",
    "manifest generation",
    "devops",
    "platform engineering",
    "gitops",
    "argocd",
    "ai",
    "open source",
  ],
  icons: {
    icon: "/mascot.jpg",
    apple: "/mascot.jpg",
  },
  openGraph: {
    title: "Dorgu — The Understanding Layer for Kubernetes",
    description:
      "AI-powered manifest generation, application personas, and a curated production stack.",
    url: "https://dorgu.run",
    siteName: "Dorgu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorgu — The Understanding Layer for Kubernetes",
    description:
      "AI-powered manifest generation, application personas, and a curated production stack.",
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
