/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'black': "#12110F"
		},
		extend: {
			boxShadow: {
				'default': '5px 5px 0 1px #12110F',
			},
			animation: {
				marquee: 'marquee 5s linear infinite',
				marquee2: 'marquee2 5s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	plugins: []
};
