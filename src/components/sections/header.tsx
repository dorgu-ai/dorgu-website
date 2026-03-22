"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "https://dorguai.mintlify.app/", external: true },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="https://github.com/dorgu-ai/dorgu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted"
          >
            <Github className="size-4" />
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3">
              <Link
                href="https://github.com/dorgu-ai/dorgu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted"
              >
                <Github className="size-4" />
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
