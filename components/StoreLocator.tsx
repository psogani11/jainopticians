"use client";

import { useState } from "react";
import { Phone, Clock, Car, MapPin } from "lucide-react";
import { stores } from "@/lib/data";

export default function StoreLocator() {
  const [activeId, setActiveId] = useState(stores[0].id);
  const active = stores.find((s) => s.id === activeId) ?? stores[0];

  return (
    <div className="grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <div className="flex lg:flex-col gap-3">
          {stores.map((store) => {
            const isActive = store.id === activeId;
            return (
              <button
                key={store.id}
                onClick={() => setActiveId(store.id)}
                aria-pressed={isActive}
                className={`text-left flex-1 lg:flex-none p-5 border transition-colors ${
                  isActive
                    ? "border-brass bg-brass/5"
                    : "border-hairline hover:border-brass/40"
                }`}
              >
                <span className="eyebrow">{store.area}</span>
                <span className="block font-display text-xl mt-1">{store.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-5">
          <div className="flex gap-3">
            <MapPin size={18} className="text-brass shrink-0 mt-0.5" />
            <p className="text-sm text-ink/75">{active.address}</p>
          </div>
          <div className="flex gap-3">
            <Clock size={18} className="text-brass shrink-0 mt-0.5" />
            <div className="text-sm text-ink/75 font-mono space-y-0.5">
              {active.hours.map((h) => (
                <p key={h.day}>
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Phone size={18} className="text-brass shrink-0 mt-0.5" />
            <a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="text-sm text-ink/75 hover:text-brass">
              {active.phone}
            </a>
          </div>
          <div className="flex gap-3">
            <Car size={18} className="text-brass shrink-0 mt-0.5" />
            <p className="text-sm text-ink/75">{active.parking}</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-ink-800">
        <iframe
          key={active.id}
          title={`Map showing ${active.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&output=embed`}
          className="w-full h-full border-0 grayscale-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
