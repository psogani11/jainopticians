"use client";

import { useState, FormEvent } from "react";
import { stores } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();

    if (!name || !phone) {
      setError("Please share your name and phone number so we can reach you.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-brass/40 bg-cream-soft p-8">
        <p className="font-display text-2xl">Message received.</p>
        <p className="mt-2 text-sm text-ink/70">
          A member of our team will call you back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="eyebrow">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brass py-2.5 outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="eyebrow">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brass py-2.5 outline-none"
        />
      </div>

      <div>
        <label htmlFor="store" className="eyebrow">Preferred Store</label>
        <select
          id="store"
          name="store"
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brass py-2.5 outline-none"
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
          <option value="no-preference">No preference</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brass py-2.5 outline-none resize-none"
          placeholder="Tell us what you're looking for, or the best time to call."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-sandstone-dark font-mono">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-ink text-cream text-sm tracking-wide hover:bg-brass transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}
