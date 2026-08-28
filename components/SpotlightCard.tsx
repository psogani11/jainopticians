"use client";

import { useRef, ReactNode, MouseEvent } from "react";

/**
 * Cursor-tracking glow on hover, in the spirit of React Bits' SpotlightCard
 * (https://reactbits.dev — MIT licensed). Rebuilt with plain React state +
 * CSS custom properties rather than pulled via their CLI, since this
 * environment has no network access to run jsrepo. Wrap any card in this
 * to get a soft brass glow that follows the pointer.
 */
export default function SpotlightCard({
  children,
  className = "",
  glowColor = "165, 121, 62", // brass, as an r,g,b triplet for use in rgba()
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group/spotlight relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(${glowColor}, 0.16), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
