/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d8edff",
          200: "#afd9ff",
          300: "#80c3ff",
          400: "#4aa7ff",
          500: "#1f8aff",
          600: "#0f70e6",
          700: "#105abb",
          800: "#154b97",
          900: "#183f7a"
        }
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 18px 40px -18px rgba(10, 29, 74, 0.55)",
        card: "0 20px 30px -16px rgba(15, 23, 42, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
