import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1815", // charcoal-black, warm not cool
          800: "#282320",
          600: "#4A423C",
        },
        cream: {
          DEFAULT: "#F6F1E7", // warm paper cream
          soft: "#FBF8F2",
          deep: "#EEE6D6",
        },
        sandstone: {
          DEFAULT: "#C08774", // Jaipur jharokha sandstone-rose
          light: "#DCB0A2",
          dark: "#9C6455",
        },
        brass: {
          DEFAULT: "#A5793E", // aged brass/bronze — luxury accent
          light: "#C79A5E",
          dark: "#7A5A2E",
        },
        hairline: "#E4DBC8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "jaali-light": "url('/jaali.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
