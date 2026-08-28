"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/categories-brands", label: "Categories & Brands" },
  { href: "/locate-us", label: "Store Locator" },
  { href: "/contact-us", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-hairline">
      <div className="container-px max-w-container mx-auto flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-ink">Jain Opticians</span>
          <span className="eyebrow mt-1 tracking-widest2">Est. Jaipur</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/80 hover:text-brass transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="font-body text-sm px-5 py-2.5 border border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            Book an Eye Test
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-hairline bg-cream"
          aria-label="Primary mobile"
        >
          <div className="container-px py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-xl text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="mt-2 text-center font-body text-sm px-5 py-3 bg-ink text-cream"
              onClick={() => setOpen(false)}
            >
              Book an Eye Test
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
