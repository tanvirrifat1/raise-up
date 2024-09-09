/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#0A71B9",
      secondary: "#4E4E4E",
      gray: "#D9D9D9",
      brightGray: "#808080",
      white: "#FFFFFF",
      black: "#00000",
      blue: "#496C90",
      brightBlue: "#2B3674",
      lightBlue: " #0A71B9",
      deepBlue: "#0E1B2F",
      grayBright: "#F5F5F5",
      extraDeepBlue: "#003E69",
      skyBlue: "#6AD2FF",
      lime: "#05CD99",
      deepGray: "#A3AED0",
      bluish: "#F4F7FE",
      limeBlue: "#0A6FB6",
      red: "#FF204E",
    },
    extend: {
      backdropFilter: {
        blur: "blur(20px)",
      },
    },
  },
  plugins: [],
};
