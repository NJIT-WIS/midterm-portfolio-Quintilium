/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          midnightblue: {
            "100": "#041e78",
            "200": "#000e41",
          },
          gray: "#080000",
          aquamarine: "#05ffe1",
          black: "#000",
          white: "#fff",
          gainsboro: "#d9d9d9",
        },
        spacing: {},
        fontFamily: {
          literata: "Literata",
          "istok-web": "'Istok Web'",
          assistant: "Assistant",
          "inria-sans": "'Inria Sans'",
          inter: "Inter",
        },
      },
      fontSize: {
        "21xl": "40px",
        "5xl": "24px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };

  
  