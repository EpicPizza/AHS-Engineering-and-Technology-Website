const starlightPlugin = require('@astrojs/starlight-tailwind');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					50: '#f6d9d5',
					100: '#ecb3ac',
					200: '#e38e82',
					300: '#d96859',
					400: '#d0422f',
					500: '#a63526',
					600: '#7d281c',
					700: '#531a13',
					800: '#2a0d09',
					900: '#150705',
					950: '#000000'
				},
				gray: colors.neutral,
			},
			fontFamily: {
				sans: ['"Roboto Slab"'],
			}
		}
	},
	plugins: [starlightPlugin()],
}
