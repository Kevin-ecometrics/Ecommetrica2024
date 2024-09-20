/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-bg": "#F4F4FF",
        "hero-bg": "#33244C",
      },
    },
  },
  plugins: [],
};
