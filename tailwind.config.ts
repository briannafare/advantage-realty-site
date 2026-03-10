import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand Blues — derived from Advantage Realty logo */
        primary: "#2563EB",       // Brand Blue 600 — primary
        "primary-dark": "#1D4ED8", // Brand Blue 700 — hover
        "primary-light": "#93C5FD", // Brand Blue 300 — secondary

        /* Accent Lime — bright, cheerful highlight */
        accent: {
          DEFAULT: "#84CC16",     // Lime 500 — CTAs, highlights
          hover: "#65A30D",       // Lime 600 — hover state
          light: "#D9F99D",       // Lime 200 — light badges
        },

        /* Neutrals */
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F3F4F6",     // Neutral 100
          alt: "#F9FAFB",         // Neutral 50
        },
        foreground: "#111827",    // Neutral 900
        muted: "#374151",         // Neutral 700
        "muted-light": "#6B7280", // Neutral 500
        border: "#E5E7EB",        // Neutral 200

        /* Dark section backgrounds */
        dark: "#111827",          // Neutral 900
        "dark-alt": "#1F2937",    // Neutral 800
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        accent: ["DM Serif Display", "serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        "bar-grow": "bar-grow 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
