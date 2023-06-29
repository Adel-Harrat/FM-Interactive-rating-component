/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-Orange": "hsl(25, 97%, 53%)",
        "custom-White": "hsl(0, 0%, 100%)",
        "custom-Light-Grey": "hsl(217, 12%, 63%)",
        "custom-Medium-Grey": "hsl(216, 12%, 54%)",
        "custom-Dark-Blue": "hsl(213, 19%, 18%)",
        "custom-Very-Dark-Blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
