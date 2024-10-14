/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				minXl: "1024px",
			},
			fontFamily: {
				dmSans: ["DM Sans", "sans-serif"],
			},
			colors: {
				appBackground: "#F8F8FB",
				typography: "#282828",
				inputBorder: "#B1B7D6",
				primary: "#7D97FF",
				disabled: "#CED6F7",
				cardBorderInactive: "#54545499",
				cardBorderActive: "#7D97FF",
				checkboxBorder: "#969696"
			},
			boxShadow: {
				cardShadow: "0px 4px 20px 0px #7D97FF33",
			},
			backgroundImage: {
				authCustomGradient:
					"linear-gradient(146.36deg, #DFEAF0 8.13%, #D5E4EA 58.07%, #F4E7F4 99.76%)",
			},
		},
	},
	plugins: [],
};
