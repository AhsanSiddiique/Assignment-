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
<<<<<<< HEAD
        customMooncolor: `#2E3944`,
        customeMoonchange: `#124E66`,
=======
        background: "var(--background)",
        foreground: "var(--foreground)",
>>>>>>> e9347d2661f0a8da12cf01327d02fc9c9f82a608
      },
    },
  },
  plugins: [],
} satisfies Config;
