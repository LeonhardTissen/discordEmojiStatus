/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				discord: {
					800: '#100808',
					700: '#1B111F',
					DEFAULT: '#202225',
					500: '#303338',
					400: '#40444B',
					300: '#50555C',
					200: '#60666F',
				}
			}
		},
	},
	plugins: [],
}
