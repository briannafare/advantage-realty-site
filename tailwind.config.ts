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
        /* Forest Green — brand anchor, sparse */
        "green-800": "#1D3B22",
        "green-700": "#2A5430",

        /* Orange — primary CTA on white/light */
        orange: {
          DEFAULT: "#E8622A",
          hover: "#D4551F",
          tint: "#FDF0EB",
        },

        /* Lime — on dark only */
        lime: {
          DEFAULT: "#C9E83A",
          tint: "#F0F7DC",
        },

        /* Blue — data section only */
        blue: {
          DEFAULT: "#5BB5D8",
          surface: "#EBF6FC",
          border: "#C4E4F2",
        },

        /* Neutrals */
        bg: "#F8F6F1",
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F2F0EA",
        },
        border: "#E0DDD6",

        /* Text */
        t1: "#141414",
        t2: "#505050",
        t3: "#909090",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Instrument Sans", "sans-serif"],
        accent: ["var(--font-accent)", "Fraunces", "serif"],
      },
      borderRadius: {
        full: "9999px",
        lg: "22px",
        md: "14px",
        sm: "8px",
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
        "draw-path": {
          "0%": { strokeDashoffset: "900" },
          "100%": { strokeDashoffset: "0" },
        },
        "pop-dot": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "card-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "count-up": "count-up 0.4s ease-out forwards",
        "bar-grow": "bar-grow 0.8s ease-out forwards",
        "draw-path": "draw-path 2s cubic-bezier(.4,0,.2,1) forwards 0.3s",
        "pop-dot": "pop-dot 0.35s ease forwards",
        "card-up": "card-up 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
