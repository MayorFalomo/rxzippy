/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.125rem", // 18px
      },
      fontFamily: {
        stinger: ["Stinger", "sans serif"],
        hkGrotesk: ["HkGrotesk", "sans serif"],
        sherika: ["Sherika", "sans serif"],
        inter: ["Inter", "sans serif"],
        darkerGrotesk: ["darkerGrotesque", "sans serif"],
        plusJarkataSans: ["plusJarkataSans"],
        cabinetGrotesk: ["cabinetGrotesk", "sans serif"],
        clashDisplay: ["clashDisplay", "sans serif"],
        lato: ["lato", "sans serif"],
        poppins: ["Poppins", "sans serif"],
        tenorSans: ["TenorSans", "sans serif"],
        montserrat: ["Montserrat", "sans serif"]
      },
      colors: {
        primary: "#000",
        secondary: "#fff",
        dark: "rgba(53, 52, 52, 1)",
        variant: "#508CFF",
        black: "#000",
        offBlack: "#3E3C3C",
        white: "#fff",
        offGray: "#433E3E",
      },
      backgroundColor: {
        primary: "#508CFF",
        secondary: "#F7F7F7",
        variant: "",
        bgPrimary: "#fff",
        offWhite: "#F8F8F8",
        fadedWhite: "#F4F5F6",
        faq: "#E9E8E8",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
