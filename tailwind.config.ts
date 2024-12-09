import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a", // Dark black for primary actions
          light: "#404040", // Lighter black for hover states
          dark: "#000000", // Pure black for emphasis
        },
        secondary: {
          DEFAULT: "#666666", // Medium grey
          light: "#808080", // Light grey
          dark: "#4d4d4d", // Dark grey
        },
        neutral: {
          50: "#fafafa", // Almost white
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717", // Almost black
        },
        background: {
          light: "#ffffff", // White
          DEFAULT: "#fafafa", // Very light grey
          dark: "#f5f5f5", // Light grey
        },
        text: {
          primary: "#1a1a1a", // Almost black
          secondary: "#666666", // Medium grey
          light: "#8c8c8c", // Light grey
        },
      },
      spacing: {
        '128': '32rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
