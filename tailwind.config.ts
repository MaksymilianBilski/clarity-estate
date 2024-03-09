import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      screens: {
        sm: "320px",
        md: "520px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
