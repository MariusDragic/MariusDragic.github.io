/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0b1220",       // fond principal
        darkElev: "#121a2b",   // cartes/éléments
        primary: "#1e3a8a",    // bleu profond
        secondary: "#3b82f6",  // bleu accent
        accent: "#60a5fa"      // bleu clair
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.25)"
      },
      fontFamily: {
        pop: ["Poppins", "ui-sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}
