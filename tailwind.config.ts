import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 10s linear infinite'
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' }
        }
      },
      colors: {
        primary: '#00b171',
        primary_dark: '#0e6747'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
