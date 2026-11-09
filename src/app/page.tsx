import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OpenSource } from "@/components/sections/open-source";
import { WaitlistSection } from "@/components/sections/waitlist-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <OpenSource />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
