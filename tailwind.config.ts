/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		animation: {
		  'wag': 'wag 0.5s infinite',
		},
		keyframes: {
		  wag: {
			'0%, 100%': { transform: 'rotate(-45deg)' },
			'50%': { transform: 'rotate(-30deg)' },
		  }
		}
	  },
	},
	plugins: [],
  }
  
  