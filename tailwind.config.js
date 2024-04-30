/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bookFlix-colors": {
          primary: "#0B0C10",
          secondary: "#C5C6C7",
          accent: "#45A29E",
          background: "#1F2833",
          detail: "#66FCF1",
        },
      },
    },
  },
  plugins: [],
};
