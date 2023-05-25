/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // brand: {
        //   50: "#FDEDE8",
        //   100: "#FBDED5",
        //   200: "#F7B9A6",
        //   300: "#F4987C",
        //   400: "#F07651",
        //   500: "#EC5324",
        //   600: "#CA3D12",
        //   700: "#962D0D",
        //   800: "#631E09",
        //   900: "#340F04",
        //   950: "#170702",
        // },
        primary: colors.blue,

        secondary: colors.orange,
        accent: colors.slate,
      },
      fontFamily: {
        // display: ["var(--font-roboto)", ...fontFamily.sans],
        // sans: ["var(--font-archivo)", ...fontFamily.sans],
        sans: ["var(--font-eb-garamond)", ...fontFamily.sans],
        display: ["var(--font-nunito-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
