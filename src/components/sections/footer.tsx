import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Documentation",
    href: "https://dorguai.mintlify.app/",
    external: true,
  },
] as const;

const OPEN_SOURCE_LINKS = [
  { label: "CLI", href: "https://github.com/dorgu-ai/dorgu", external: true },
  {
    label: "Operator",
    href: "https://github.com/dorgu-ai/dorgu-operator",
    external: true,
  },
  {
    label: "Platform",
    href: "https://github.com/dorgu-ai/dorgu-platform",
    external: true,
  },
  {
    label: "Helm Charts",
    href: "https://github.com/dorgu-ai/cluster-helm-charts",
    external: true,
  },
] as const;

const COMMUNITY_LINKS = [
  { label: "GitHub", href: "https://github.com/dorgu-ai", external: true },
  { label: "Twitter / X", href: "#" },
] as const;

const LEGAL_LINKS = [
  { label: "Apache 2.0 License", href: "#" },
] as const;

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={cn("border-t border-border bg-muted/40")}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Open Source" links={OPEN_SOURCE_LINKS} />
          <FooterColumn title="Community" links={COMMUNITY_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center gap-2 border-t border-border pt-6">
          <Image
            src="/mascot.jpg"
            alt="Dorgu mascot"
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
          <p className="text-sm text-muted-foreground">
            © 2026 Dorgu. Open source under Apache 2.0.
          </p>
        </div>
      </div>
    </footer>
  );
}
