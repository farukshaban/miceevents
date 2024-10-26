// tailwind.config.js
/* main.css or in Tailwind custom config */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        accent: "#8b5cf6", // neon purple
        neon: "#22d3ee", // bright cyan accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0px 0px 15px rgba(34, 211, 238, 0.5)", // glowing cyan shadow
        card: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        gradient: "gradient 4s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

