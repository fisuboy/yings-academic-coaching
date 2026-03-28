import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#183153",
        terracotta: "#C86B4A",
        warm: "#FAF8F4",
        surface: "#FFFFFF",
        gold: "#D9B46B",
        body: "#1F2937",
        muted: "#6B7280"
      },
      boxShadow: {
        card: "0 12px 40px rgba(24, 49, 83, 0.08)"
      },
      maxWidth: {
        content: "1200px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-sc)", "sans-serif"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 25%, rgba(217, 180, 107, 0.24), transparent 45%), radial-gradient(circle at 75% 15%, rgba(200, 107, 74, 0.2), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
