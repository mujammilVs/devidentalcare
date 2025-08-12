/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: "#F0FDFF",
          100: "#C4F1F9",
          200: "#9DECF9",
          300: "#76E4F7",
          400: "#0BC5EA",
          500: "#00B5D8",
          600: "#00A3C4",
          700: "#0987A0",
          800: "#086F83",
          900: "#065666",
        },
        cream: {
          50: "#FFFDF7",
          100: "#FDF8E1",
          200: "#FCF4CC",
          300: "#FINRB7",
          400: "#F6E05E",
          500: "#ECC94B",
          600: "#D69E2E",
          700: "#B7791F",
          800: "#975A16",
          900: "#744210",
        },
        gold: {
          50: "#FFF8DC",
          100: "#E9C46A",
          200: "#F4A261",
          300: "#E76F51",
          400: "#E9C46A",
          500: "#D4AC0D",
          600: "#B7950B",
          700: "#9A7D0A",
          800: "#7D6608",
          900: "#6C5606",
        },
        dark: {
          50: "#F7F7F7",
          100: "#E1E1E1",
          200: "#CFCFCF",
          300: "#B1B1B1",
          400: "#9E9E9E",
          500: "#7E7E7E",
          600: "#626262",
          700: "#515151",
          800: "#3B3B3B",
          900: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      clipPath: {
        wave: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        diagonal: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
