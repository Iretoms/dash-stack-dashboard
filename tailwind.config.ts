import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			"nunito":["Nunito Sans", "sans-serif"],
		},
  		colors: {
			"primary": "#4880FF",
			"secondary": "#5A8CFF",
			"dark-text": "#202224",
			"gray-text": "#A6A6A6",
			"gray-1": "#F1F4F9",
			"noti-red": "#F93C65",

  		},
  	}
  },
  plugins: [],
} satisfies Config;
export default config;
