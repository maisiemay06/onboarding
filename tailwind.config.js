/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["sofia-pro"],
      serif: ["sofia-pro"],
      mono: ["sofia-pro"],
      display: ["sofia-pro"],
      body: ["sofia-pro"],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      7: "7px",
      8: "8px",
    },
    extend: {
      spacing: {
        7: "1.75rem",
      },
      colors: {
        "meeow-dark": "#28348A",
        "meeow-primary": "#3843F1",
        "meeow-primary-grayscale": "#535353",
        "meeow-secondary": "#25DCDC",
        "meeow-secondary-grayscale": "#A5A5A5",
        "meeow-shadow-dark": "#E5E8FC",
        "meeow-shadow-light": "#F6F7FF",
        "meeow-secondary-dark": "#28C7C7",
        "meeow-primary-ghost": "#5F69F3",
        "meeow-secondary-ghost": "#7CEAEA",
        "meeow-red": "#DD4C52",
        "meeow-linkedin": "#3a8deb",
        "meeow-disabled": {
          default: "#F2F2FE",
        },
        meeow: {
          light: "#F4F4FF",
          lighter: "#25DCDC",
          default: "#3843F1",
          dark: "#28348A",
          darker: "#12194A",
        },
        "meeow-green": {
          lighter: "#1ae0e0",
          default: "#00DCDC",
          dark: "#04C7C7",
        },
        denim: "#2d66a1",
        "meeow-tt-orange": {
          default: "#FC6100",
        },
      },
      width: {
        "signup-elements": "30%",
      },
      height: {
        "pred-search": "29%",
      },
    },
    fill: (theme) => ({
      lightgold: theme("colors.yellow.200"),
      gold: theme("colors.yellow.400"),
      gray: theme("colors.gray.200"),
      lightmeeow: theme("colors.meeow.lighter"),
      meeow: theme("colors.meeow.default"),
      "meeow-primary": theme("colors.meeow-primary"),
      "meeow-secondary": theme("colors.meeow-secondary"),
      white: theme("colors.white"),
      "meeow-red": theme("colors.meeow-red"),
      "meeow-primary-grayscale": theme("colors.meeow-primary-grayscale"),
      "meeow-dark": theme("colors.meeow-dark"),
    }),
    stroke: (theme) => ({
      "meeow-primary": theme("colors.meeow-primary"),
      "meeow-secondary": theme("colors.meeow-secondary"),
    }),
  },
  plugins: [],
};
