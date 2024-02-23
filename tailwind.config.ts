import type { Config } from "tailwindcss";
import defaultTailwindTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTailwindTheme.fontFamily.sans],
        "kode-mono": ["Kode Mono", "Proxima Nova"],
      },
    },
  },
  plugins: [],
};
export default config;
