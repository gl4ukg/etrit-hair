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
          light: '#C8D5C8',  // Light Sage
          DEFAULT: '#7C9A7C', // Sage Green
          dark: '#4A674A',    // Deep Sage
        },
        neutral: {
          light: '#F8FAF8',   // Off White
          DEFAULT: '#E8EDE8',  // Light Gray with green tint
          dark: '#2C3B2C',    // Deep Green-Gray
        },
        accent: {
          cream: '#F5E6D3',   // Warm Cream
          terra: '#D4A373',   // Terracotta
          olive: '#606C38',   // Olive Green
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
