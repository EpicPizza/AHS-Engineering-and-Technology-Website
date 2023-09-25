# AHS Engineering and Technology Website

This website was made using Starlight and Astro. You can check [Starlight’s docs](https://starlight.astro.build/) and [Astro documentation](https://docs.astro.build) to learn more.

## Google Calendar Integration

The upcoming meetings section (on the main page) pings a seperate server for the events. That server then reads the events from Google Calendar. This means no additional setup is needed for running this website locally.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                 |
| :------------------------ | :------------------------------------------------------|
| `npm install`             | Installs dependencies                                  |
| `npm run dev`             | Starts local dev server at `localhost:4321`            |
| `npm run build`           | Build the production site to `./dist/`                 |
| `npm run preview`         | Preview the build locally, before deploying            |
| `npm run deploy`          | Deploy the website to firebase.                        |
| `npm run serve`           | Combination of build and deploy commands.              |
| `npm run astro ...`       | Run Astro CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                           | 
