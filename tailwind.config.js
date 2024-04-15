/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      textColor: '#6F7682',
      btnColor: '#4798DE',
      darkBlue: '#15244F',
      lightGary: '#F1F2F6',
      titleColor: '#15244F',
      greenPrimry: '#6CDB7E'
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px"
    },
    backgroundImage: {
      aboutBg: "url('../../public/assets/img/about-bg.png')",
      popularBg: "url('../../public/assets/img/popular-bg.png')",
      popularSliderImg1: "url('../../public/assets/img/popular-slider-1.png')",
      popularSliderImg2: "url('../../public/assets/img/popular-slider-2.png')",
      newsBg: "url('../../public/assets/img/nuws-bg.png')",
    },
    extend: {
      productsShadow: '1px 1px 4px 0px #4798DEB2'
    },
  },
  plugins: [],
};


