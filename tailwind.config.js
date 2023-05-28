/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "rgb(var(--primaryColor) / <alpha-value>)",
      secondary: "rgb(var(--secondaryColor) / <alpha-value>)",
      accent: "rgb(var(--accentColor) / <alpha-value>)",
    },
  },
  plugins: [],
};