/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "header-img": "url('images/desktop/image-header.jpg')",
        "graphic-design-img": "url('images/desktop/image-graphic-design.jpg')",
        "photography-img": "url('images/desktop/image-photography.jpg')",
      },
      color: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
      },
    },
  },
  plugins: [],
};
