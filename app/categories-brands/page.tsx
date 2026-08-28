import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SplitReveal from "@/components/SplitReveal";
import JaaliDivider from "@/components/JaaliDivider";
import JaaliPattern from "@/components/JaaliPattern";
import { categories, brands } from "@/lib/data";

export const metadata = {
  title: "Categories & Brands — Jain Opticians",
  description:
    "Browse eyeglasses, sunglasses, contact lenses and accessories, and the designer houses carried at Jain Opticians, Jaipur.",
};

export default function CategoriesBrandsPage() {
  return (
    <>
      {/* INTRO */}
      <section className="relative bg-ink text-cream py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <JaaliPattern id="cb-hero-jaali" color="#F6F1E7" size={72} />
        </div>
        <div className="container-px max-w-container mx-auto relative">
          <span className="eyebrow text-brass-light">The Collection</span>
          <SplitReveal
            as="h1"
            text="Categories & Brands"
            className="font-display text-4xl md:text-5xl mt-4 max-w-2xl"
          />
          <p className="mt-5 text-cream/75 max-w-lg text-[15px]">
            A working lookbook of what's on the wall right now, and the
            houses we've chosen to carry. Everything shown is available to
            try on in-store — nothing here ships without a fitting.
          </p>
        </div>
      </section>

      <JaaliDivider id="div-cb-hero" tone="dark" />

      {/* CATEGORY LOOKBOOK */}
      {categories.map((category, ci) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`py-16 md:py-20 scroll-mt-20 ${
            ci % 2 === 1 ? "bg-cream-deep" : "bg-cream"
          }`}
        >
          <div className="container-px max-w-container mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                ci % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <SpotlightCard className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} at Jain Opticians`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </SpotlightCard>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="eyebrow">
                  {String(ci + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-2">{category.name}</h2>
                <p className="mt-4 text-ink/65 text-[15px] max-w-md">{category.description}</p>

                <div className="flex flex-wrap gap-2.5 mt-7">
                  {category.frameShapes.map((shape) => (
                    <span
                      key={shape}
                      className="font-mono text-[11px] tracking-widest2 uppercase border border-ink/20 px-3 py-1.5"
                    >
                      {shape}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-ink text-cream text-sm tracking-wide hover:bg-brass transition-colors">
                  Enquire In Store <ArrowUpRight size={16} />
                </button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <JaaliDivider id="div-cb-brands" tone="light" />

      {/* BRAND GRID */}
      <section className="py-20 md:py-24 bg-ink text-cream">
        <div className="container-px max-w-container mx-auto">
          <Reveal>
            <span className="eyebrow text-brass-light">Houses We Carry</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-lg">
              Twenty names, one standard of fit.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {brands.map((brand, i) => (
              <Reveal key={brand.name} delay={(i % 6) * 0.05}>
                <SpotlightCard
                  glowColor="199, 154, 94"
                  className="border border-cream/15 p-7 md:p-8 hover:border-brass-light/60 transition-colors h-full"
                >
                  <span className="font-display text-2xl">{brand.name}</span>
                  <p className="mt-3 text-sm text-cream/60 leading-relaxed">{brand.blurb}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
