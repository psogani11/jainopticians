"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md"
        noValidate
      >
        {/* honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className="flex-1 bg-transparent border-b border-cream/30 focus:border-brass-light py-2 text-sm placeholder:text-cream/40 text-cream outline-none"
        />
        <button
          type="submit"
          className="shrink-0 px-6 py-2.5 bg-brass text-cream text-sm tracking-wide hover:bg-brass-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
      <div aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs font-mono">
        {status === "success" && (
          <span className="text-brass-light">Thank you — you're on the list.</span>
        )}
        {status === "error" && (
          <span className="text-sandstone-light">Enter a valid email address.</span>
        )}
      </div>
    </div>
  );
}
