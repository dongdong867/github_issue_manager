/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-Montserrat)']
			},
			colors: {
				primary: '#4285f4',
				'primary-content-light': '#f5f5f5',
				'primary-content-dark': '#202328',
				button: '#16c984',
				'base-light': '#eaeaea',
				'base-dark': '#1f1f1f',
				'border-primary': '#7188B4',
				open: '#4285f4',
				'in-progress': '#E79E2F',
				done: '#16c984',
				delete: '#C94A30',
				edit: '#4285f4'
			},
			borderRadius: {
				primary: '20px',
				small: '10px'
			},
			boxShadow: {
				base: '-5px -5px 15px #fcfcfc, 6px 6px 18px -14px #878787, 7px 6px 7px -6px rgba(0, 0, 0, 0.11)'
			}
		}
	},
	plugins: []
}
