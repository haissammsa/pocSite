import type { NextConfig } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: https:",
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  env: {
    NEXT_PUBLIC_SITE_URL: SITE_URL,
  },
};

export default nextConfig;
