import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://ahsengineering.org',
  redirects: {
    '/subclubs/inkandmetal': '/branch/inkandmetal',
    '/subclubs/vex': '/branch/vex',
    '/subclubs/tsa': '/branch/tsa',
    '/subclubs/bioe': '/branch/bioe',
    '/subclubs/ai': '/branch/ai',
    '/subclubs/eagleexplorer': '/branch/eagleexplorer',
    '/subclubs/gwc': '/branch/gwc',
    '/subclubs/innovators': '/branch/innovators',
    '/subclubs/cloudnative': '/branch/cloudnative',
    '/subclubs/web3': '/branch/web3',
    '/subclubs/compstats': '/branch/compstats',
    '/subclubs/qcc': '/branch/qcc',
    '/subclubs/overview': '/branch/overview',
  },
  integrations: [starlight({
    logo: {
      src: './public/favicon.png',
      alt: 'Logo'
    },
    editLink: {
      baseUrl: "https://github.com/EpicPizza/AHS-Engineering-and-Technology-Website/blob/master/"
    },
    lastUpdated: true,
    title: 'AHS E&T',
    social: {
      discord: 'https://discord.gg/ncDdK4fdg2',
      youtube: 'https://www.youtube.com/@ahsengandtech',
      facebook: 'https://www.facebook.com/groups/213303255403592',
      instagram: 'https://www.instagram.com/ahs_ent',
      email: 'mailto:contact@ahsengineering.org',
    },
    components: {
      Hero: './src/components/Hero.astro',
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
            label: 'Guest Speakers',
            link: '/guest-speakers'
          }]
      }, {
        label: 'Our Branches',
        items: [
          // Each item here is one entry in the navigation menu.
          {
            label: 'Overview',
            link: '/branch/overview/'
          },
          {
            label: 'Ink and Metal',
            link: '/branch/inkandmetal/'
          },
          {
            label: 'VEX Robotics',
            link: '/branch/vex/'
          },
          {
            label: 'Space Pickles',
            link: '/branch/rocketry/'
          },
          {
            label: 'Rotationaries',
            link: '/branch/rotationaries/'
          },
          {
            label: 'Artificial Intelligence',
            link: '/branch/ai/'
          },
          {
            label: 'Girls Who Code',
            link: '/branch/gwc/'
          },
          {
            label: 'Innovators!',
            link: '/branch/innovators/'
          },
          {
            label: 'Society of Women’s Engineers',
            link: '/branch/swenext/'
          },
          {
            label: 'App Developemnt',
            link: '/branch/appdev/'
          },
          {
            label: 'Computer-Aided Design (CAD)',
            link: '/branch/cad/'
          },
        ]
      }],
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
        rel: "icon",
        href: "/favicon.png"
      }
    }, {
      tag: "script",
      attrs: {
        type: "module",
      },
      content: `// Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCMYlWG4wTIQwJsdOrjj1EtzuEduLAgzVk",
        authDomain: "ahs-eng-and-tech-club.firebaseapp.com",
        projectId: "ahs-eng-and-tech-club",
        storageBucket: "ahs-eng-and-tech-club.appspot.com",
        messagingSenderId: "247371672850",
        appId: "1:247371672850:web:6ecef3c569e5230386d7cb",
        measurementId: "G-CXMQFY3QVS"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);`
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