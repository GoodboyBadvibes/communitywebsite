import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors:{
      'standard':'#2387c0',
      'offWhite':'#F6F6F6D3',
      // 'standarddark':'#663f2c',
      // 'backdark':'rgb(36,36,36)'
    }
  },
  plugins: [],
} satisfies Config;
