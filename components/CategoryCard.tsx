import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories-brands#${category.slug}`} className="group block">
      <SpotlightCard
        glowColor="246, 241, 231"
        className="overflow-hidden aspect-[4/5] bg-ink"
      >
        <Image
          src={category.image}
          alt={`${category.name} at Jain Opticians`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
          <div>
            <span className="eyebrow text-brass-light">{category.frameShapes.length} shapes</span>
            <h3 className="font-display text-2xl text-cream mt-1">{category.name}</h3>
          </div>
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-cream/40 text-cream transition-colors group-hover:bg-cream group-hover:text-ink shrink-0">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </SpotlightCard>
    </Link>
  );
}
