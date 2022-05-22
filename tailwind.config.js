module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6419E6",
          "secondary": "#0e6655",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
