import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
      },
      boxShadow: {
        custom: "0px 10px 30px 20px hsla(292, 16%, 49%, 0.1)",
      },
      backgroundImage: {
        desktop: "url('/images/background-pattern-desktop.svg')",
        mobile: "url('/images/background-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
