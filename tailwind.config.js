/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html", "public/*.js"],
  theme: {
    fontFamily: {
      "body": "Overpass, sans-serif"
    },
    extend: {
      colors: {
        primary: {
          light_red__ctaText: "hsl(356, 100%, 66%)",
          very_light_red__ctaBackground: "hsl(355, 100%, 74%)",
          very_dark_blue__heading: "hsl(208, 49%, 24%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          grayish_blue__footerText: "hsl(240, 2%, 79%)",
          very_dark_grayish_blue__bodyCopy: "hsl(207, 13%, 34%)",
          very_dark_black_blue__footerBg: "hsl(240, 10%, 16%)",
        },
        gradient: {
          // intro and cta mobile nav
          very_light_red: "hsl(13, 100%, 72%)",
          light_red: "hsl(353, 100%, 62%)",

          // body
          very_dark_gray_blue: "hsl(237, 17%, 21%)",
          very_dark_desaturated_blue: "hsl(237, 23%, 32%)",
        }
      }
    },
  },
  plugins: [],
}
