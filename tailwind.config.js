/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#0A0A0A',
        'gold': '#FFD700',
        'near-black': '#0f0f0f',
        'coral-pink': '#F06274',
        'deep-charcoal': '#121212',
        'electric-blue': '#7DF9FF',
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}