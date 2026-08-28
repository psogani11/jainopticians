"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PromoBanner({
  message = "Complimentary lens upgrade on all frames purchased before the season closes.",
}: {
  message?: string;
}) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-ink text-cream">
      <div className="container-px max-w-container mx-auto flex items-center justify-center py-2.5 pr-10 text-center">
        <p className="font-mono text-[11px] md:text-xs tracking-widest2 uppercase">
          {message}
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream"
      >
        <X size={16} />
      </button>
    </div>
  );
}
