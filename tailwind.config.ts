import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          900: "#0a0a0b",
          800: "#121214",
          700: "#1a1a1d",
        },
        charcoal: {
          DEFAULT: "#1f2125",
          light: "#2a2d33",
        },
        steel: {
          DEFAULT: "#8b9099",
          light: "#c2c7cf",
          dark: "#4a4e56",
        },
        brand: {
          DEFAULT: "#e11d2a",
          dark: "#b3121d",
          light: "#ff3340",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.6)",
        "card-hover": "0 24px 50px -12px rgba(225,29,42,0.35)",
        glow: "0 0 0 1px rgba(225,29,42,0.4), 0 12px 40px -8px rgba(225,29,42,0.45)",
      },
      backgroundImage: {
        "grid-steel":
          "linear-gradient(to right, rgba(139,144,153,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,144,153,0.06) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(circle at 30% 20%, rgba(225,29,42,0.18), transparent 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "spin-slow": "spin-slow 26s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
