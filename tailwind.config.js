/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Jost-Font": ['"Jost"', "sans-serif"],
      },
      width: {
        "100px": "100px",
        "400px": "25rem",
        "460px": "28.75rem",
      },
      height: {
        "150px": "9.375rem",
        "60vh": "60vh",
      },
      padding: {
        "4/5": "80%",
      },
      spacing: {
        "3/2": "150%",
        "4/5": "80%",
      },
      boxShadow: {
        "custom-orange": "7px 7px 0px 0px rgba(250, 71, 41, 0.18)",
        "custom-dark": "7px 7px 0px 0px rgba(16, 16, 16, 0.18)",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0, 0, 0.3642, 1)",
      },
    },
  },
  plugins: [
    {
      groupHover: {},
    },
  ],
};
