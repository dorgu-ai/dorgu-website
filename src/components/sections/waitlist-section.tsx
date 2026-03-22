import { WaitlistForm } from "@/components/waitlist/waitlist-form";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-muted/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-muted-foreground">
            Help us understand your needs. Takes less than 3 minutes.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
