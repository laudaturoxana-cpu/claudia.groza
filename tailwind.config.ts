import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2EB",
        "cream-alt": "#EAE0D0",
        "blue-light": "#D4E8F0",
        primary: "#3B5E8C",
        amber: "#C47B2B",
        "green-bio": "#2C7A4B",
        "purple-write": "#7B5EA7",
        "text-main": "#1E2A3A",
        "text-secondary": "#5A6478",
        "green-light": "#EAF3EC",
        "purple-light": "#EDE5F5",
        "whatsapp": "#25D366",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        tight: "1.3",
        relaxed: "1.7",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
