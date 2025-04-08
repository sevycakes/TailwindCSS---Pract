/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        starBanner: "url(../dist/img/rewards/xl-hero-desktop_2021.png)",
        bituinBanner: "url(../dist/img/rewards/hero-mobile_2021.webp)",
      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        berde: "#006341",
        violet: "#d5d0ea",
        lightviolet: "#f2f0eb",
        lightgreen: "#cee8c9",
        lightpink: "#f5cac4",
        lightblue: "#dbe6f2",
        lightorange: "#e99264",
        lightberde: "#d4e9e2",
      }
    },
  },
  plugins: [],
}

