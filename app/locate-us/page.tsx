import Reveal from "@/components/Reveal";
import StoreLocator from "@/components/StoreLocator";
import JaaliPattern from "@/components/JaaliPattern";

export const metadata = {
  title: "Store Locator — Jain Opticians",
  description: "Find opening hours, addresses and directions for both Jain Opticians boutiques in Jaipur.",
};

export default function LocateUsPage() {
  return (
    <>
      <section className="relative bg-ink text-cream py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <JaaliPattern id="locate-hero-jaali" color="#F6F1E7" size={72} />
        </div>
        <div className="container-px max-w-container mx-auto relative">
          <span className="eyebrow text-brass-light">Visit Us</span>
          <h1 className="font-display text-4xl md:text-5xl mt-4 max-w-xl">Store Locator</h1>
          <p className="mt-5 text-cream/75 max-w-lg text-[15px]">
            Both boutiques carry the full designer wall and offer walk-in eye
            tests, though we'd always recommend calling ahead for a fitting
            appointment.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cream">
        <div className="container-px max-w-container mx-auto">
          <Reveal>
            <StoreLocator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
