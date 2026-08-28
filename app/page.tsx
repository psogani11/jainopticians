import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import CategoryCard from "@/components/CategoryCard";
import BrandMarquee from "@/components/BrandMarquee";
import JaaliDivider from "@/components/JaaliDivider";
import JaaliPattern from "@/components/JaaliPattern";
import Newsletter from "@/components/Newsletter";
import SplitReveal from "@/components/SplitReveal";
import CountUp from "@/components/CountUp";
import { categories, testimonials, brands, stores } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <JaaliPattern id="hero-jaali" color="#F6F1E7" size={72} />
        </div>
        <div className="container-px max-w-container mx-auto relative grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
          <div>
            <span className="eyebrow text-brass-light">Dispensing Opticians · Jaipur</span>
            <SplitReveal
              as="h1"
              text="Eyewear fitted with the same care as jewellery."
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-5"
            />
            <p className="mt-6 text-cream/75 text-lg max-w-md">
              A curated wall of the world's leading eyewear houses, dispensed
              by optometrists who've been reading Jaipur's prescriptions for
              three generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brass text-cream text-sm tracking-wide hover:bg-brass-dark transition-colors"
              >
                Book an Eye Test <ArrowRight size={16} />
              </Link>
              <Link
                href="/categories-brands"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream/40 text-cream text-sm tracking-wide hover:bg-cream hover:text-ink transition-colors"
              >
                Explore Collections
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/4]">
            <Image
              // Photo by Eliabe Costa on Unsplash — man wearing silver-framed eyeglasses (Unsplash License)
              src="https://images.unsplash.com/photo-1585167404119-b1d79ddeb7fc?auto=format&fit=crop&w=1000&q=80"
              alt="Client wearing eyeglasses fitted at Jain Opticians"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 hidden md:block overflow-hidden">
              <Image
                // Photo by Annie Spratt on Unsplash — Hawa Mahal, Jaipur (Unsplash License)
                src="https://images.unsplash.com/photo-1524229648276-e66561fe45a9?auto=format&fit=crop&w=300&q=80"
                alt="Hawa Mahal, Jaipur"
                fill
                sizes="112px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-sandstone/40">
                <JaaliPattern id="hero-corner-jaali" color="#1B1815" opacity={0.55} size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <JaaliDivider id="div-hero" tone="dark" />

      {/* CATEGORY TEASERS */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-px max-w-container mx-auto">
          <Reveal>
            <span className="eyebrow">Shop by Category</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-lg">
              Three ways into the collection, one standard of fit.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.slice(0, 3).map((category, i) => (
              <Reveal key={category.slug} delay={i * 0.08}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-ink text-cream">
        <div className="container-px max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Reveal>
            <span className="font-display text-4xl md:text-5xl text-brass-light">
              <CountUp to={brands.length} suffix="+" />
            </span>
            <p className="eyebrow mt-2 text-cream/60">Designer Houses</p>
          </Reveal>
          <Reveal delay={0.06}>
            <span className="font-display text-4xl md:text-5xl text-brass-light">
              <CountUp to={stores.length} />
            </span>
            <p className="eyebrow mt-2 text-cream/60">Jaipur Boutiques</p>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="font-display text-4xl md:text-5xl text-brass-light">
              <CountUp to={3} />
            </span>
            <p className="eyebrow mt-2 text-cream/60">Generations</p>
          </Reveal>
          <Reveal delay={0.18}>
            <span className="font-display text-4xl md:text-5xl text-brass-light">
              <CountUp to={categories.length} />
            </span>
            <p className="eyebrow mt-2 text-cream/60">Categories</p>
          </Reveal>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="py-14 bg-cream-deep border-y border-hairline">
        <div className="max-w-container mx-auto">
          <Reveal className="container-px mb-6">
            <span className="eyebrow">Houses We Carry</span>
          </Reveal>
          <BrandMarquee />
        </div>
      </section>

      <JaaliDivider id="div-brands" tone="light" />

      {/* HERITAGE / TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-px max-w-container mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            <Reveal className="md:col-span-2">
              <span className="eyebrow">Since the First Boutique on MI Road</span>
              <h2 className="font-display text-3xl md:text-4xl mt-3">
                Craftsmanship, read like a prescription.
              </h2>
              <p className="mt-5 text-ink/70 text-[15px] leading-relaxed">
                Every pair that leaves our dispensing table has been measured,
                adjusted and checked by hand — the same standard our founder
                held to when the shop first opened its shutters in Jaipur's
                old commercial quarter.
              </p>
              <Link
                href="/categories-brands"
                className="inline-flex items-center gap-2 mt-6 text-sm text-brass hover:text-brass-dark border-b border-brass/40 pb-0.5"
              >
                Explore the Collection <ArrowRight size={14} />
              </Link>
            </Reveal>

            <div className="md:col-span-3 grid sm:grid-cols-1 gap-6">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.08} className="border border-hairline p-6 md:p-8 bg-cream-soft">
                  <Quote size={20} className="text-brass" />
                  <p className="font-display text-lg md:text-xl italic mt-4 leading-snug">
                    "{t.quote}"
                  </p>
                  <p className="mt-4 font-mono text-xs tracking-wide text-ink/50">
                    {t.name} — {t.context}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JaaliDivider id="div-testimonials" tone="dark" />

      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-ink text-cream">
        <div className="container-px max-w-container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="eyebrow text-brass-light">Stay In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-md">
              First look at new arrivals, once a month.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Newsletter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
