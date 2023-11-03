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
					'800': '#100808',
					'700': '#1B111F',
					DEFAULT: '#202225',
					'500': '#303338',
					'400': '#40444B',
					'300': '#50555C',
					'200': '#60666F',
					'800-a': '#10080870',
					'700-a': '#1B111F70',
					'500-a': '#30333870',
					'400-a': '#40444B70',
					'300-a': '#50555C70',
					'200-a': '#60666F70',
				}
			}
		},
	},
	plugins: [],
}
