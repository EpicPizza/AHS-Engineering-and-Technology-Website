import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    logo: {
      src: './src/assets/logo.png'
    },
    title: 'AHS E&T',
    social: {
      discord: 'https://discord.gg/ncDdK4fdg2',
	    youtube: 'mailto:frc.skywalkers@gmail.com',
    },
    sidebar: [
	{
		label: 'Our Club',
		items: [
		// Each item here is one entry in the navigation menu.
		{
			label: 'About Us',
			link: '/about'
		},
		{
			label: 'Our Team',
			link: '/team'
		},
		{
			label: 'Events',
			link: '/events'
		}]
	},{
      label: 'Our Subclubs',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Overview',
        link: '/subclubs/overview/'
      },
	  {
        label: 'Ink and Metal',
        link: '/subclubs/inkandmetal/'
      },
	  {
        label: 'Artificial Intelligence Club',
        link: '/subclubs/ai/'
      },
	  {
        label: 'Eagle Explorer',
        link: '/subclubs/eagleexplorer/'
      },
	  {
        label: 'Girls Who Code',
        link: '/subclubs/gwc/'
      },
	  {
        label: 'Innovator\'s Club',
        link: '/subclubs/innovators/'
      },
    {
        label: 'Cloud Native Club',
        link: '/subclubs/cloudnative/'
      },
    {
        label: 'Technology Student Association',
        link: '/subclubs/tsa/'
      }
    ]}],
    customCss: [
    // Path to your Tailwind base styles:
    './src/tailwind.css'],
    head: [{
      tag: "link",
      attrs: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }
    }, {
      tag: "link",
      attrs: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: undefined
      }
    }, {
      tag: "link",
      attrs: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Rubik&display=swap"
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), svelte()]
});