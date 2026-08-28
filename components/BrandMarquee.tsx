import { brands } from "@/lib/data";

export default function BrandMarquee() {
  const row = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] motion-reduce:animate-none">
        {row.map((brand, i) => (
          <span
            key={`${brand.name}-${i}`}
            className="font-display text-3xl md:text-4xl text-ink/70 px-8 md:px-12 whitespace-nowrap"
          >
            {brand.name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
