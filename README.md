# WP Kanban

![](https://i.imgur.com/W6Xv5oI.gif)

Adds a Trello-like Kanban Board to your WordPress dashboard!

## Current features:
- Create and manage cards
- Rename and organize columns

## Planned features:
- Create new columns
- Manage multiple boards
- Assign cards to users
- Todo lists (this feature is currently [being developed separately](https://github.com/ThePersonalDev/contenteditable-checkboxes))

# Installing

**This plugin is currently in development**, but you can install it by downloading the .zip file from GitHub and uploading it through your dashboards plugin page.

You can also install it through the free version of [WP Pusher](https://wppusher.com/). This will keep the plugin in sync with the master branch of this repo.

# Local Development

## 🚨 Important Notes

- Do not edit /dist files manually, they will be overwritten

## Prereqs

- Install [NodeJS](https://nodejs.org/en/)
- Install [Vue CLI](https://cli.vuejs.org/) globally with: `npm i -g @vue/cli`
- Install project dependencies with: `npm i`

## Setup

- Add this repo into your <a href="https://localwp.com/">local WordPress</a> sites `/wp-content/plugins/` folder and activate the plugin
- `npm run dev` - Starts local development on localhost:8080. This loads a dummy WordPress dashboard. You'll need to build the project for it to reflect in your actual WordPress
- `npm run build` - Builds the project into `/dist`, which is loaded by the plugin

## How it works
- JavaScript files are compiled from `./src/` into `./dist` with `npm run build`
- WordPress loads `./index.php`, which enqueues the required scripts
- Boards are just CPT categories, and Lists are subcategories. Cards belong to Lists which belong to Boards