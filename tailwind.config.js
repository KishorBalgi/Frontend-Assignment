/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e1e1e",
        "dark-2": "#313131",
      },
    },
  },
  plugins: [],
};
