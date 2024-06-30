/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'black': "#12110F",
			'default': "#FFF0E8"
		},
		extend: {
			boxShadow: {
				'small': '2px 2px 0 0 #12110F',
				'medium': '4px 4px 0 0 #12110F',
				'large': '5px 5px 0 1px #12110F'
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
