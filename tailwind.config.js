export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Fondos nocturnos */
        night900: "#0d162a",
        night800: "#1b2642",
        night700: "#2a3654",

        /* Azul mariano */
        celestial300: "#b7c7e6",
        celestial500: "#5a7cc2",
        celestial700: "#2f4f8f",

        /* Dorado y marfil */
        sacredGold: "#c9a24d",
        sacredIvory: "#f5f1e8",
      },
    },
  },
  plugins: [],
};
