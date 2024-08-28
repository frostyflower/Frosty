/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				"slide-down-key": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"slide-left-key": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				}
			},
			animation: {
				"slide-down": "slide-down-key 0.5s ease forwards",
				"slide-left": "slide-left-key 1s ease forwards"
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
				lobster: ["Lobster", "sans-serief"]
			},
			fontSize: {
				"5xl": "3rem",
				"6xl": "3.75rem",
			},
		},
	},
	plugins: [],
};
