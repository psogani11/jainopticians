/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Dev-server origin allowlist (Next.js 15.2.2+ blocks cross-origin
  // requests for _next assets/HMR by default — see CVE-2025-48068).
  // Add every LAN address/hostname you'll use to open `next dev` from
  // another device. Wildcards are supported per-segment, e.g. "192.168.1.*".
  // This setting is dev-only; it has no effect on `next build`/`next start`.
  allowedDevOrigins: [
    "192.168.1.*",
    "192.168.0.*",
    "10.0.0.*",
  ],
};

module.exports = nextConfig;
