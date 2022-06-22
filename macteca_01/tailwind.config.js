/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  media: false,
  mode: "jit",
  theme: {
    backgroundImage: {
      'tech-bg': "url('https://api.lorem.space/image/fashion?w=1000&h=800')",
    },

    colors: {
      white: "#EFFFFD",
      babyblue: "#B8FFF9",
      brightblue: "#85F4FF",
      darkblue: "#42C2FF",
    },
    extend: {},
  },
  plugins: [require("daisyui"),'macros'],
};
