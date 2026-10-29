
# Recipe Explorer

Recipe Explorer is a website where users can search for recipes and find cooking inspiration.

Users can search for meals by name, browse recipe cards, and open a recipe to see its ingredients and cooking instructions.

The website is built with Next.js and TypeScript. It uses TheMealDB API to get recipe information.



## Features

- Search for recipes by name.
- Browse recipes with images and titles.
- View ingredients and cooking instructions.
- Navigate between pages.
- See a message when no recipes are found.
- View a custom 404 page for invalid recipes.
- Use the website on desktop and mobile devices.



## API

This project uses TheMealDB API to fetch recipe data.

API documentation: https://www.themealdb.com/api.php

The website uses two API endpoints:

- `search.php?s=chicken` — searches for recipes by name and returns a list of meals.
- `lookup.php?i=52772` — finds one recipe by its ID and returns detailed information.

Both endpoints use the HTTP GET method.

GET is used to request data from an API without changing it.

The website displays recipe names, images, ingredients, and cooking instructions.

No database or user account is required.



## Technologies

- Next.js 16 — React framework for building the website.
- React — used to create reusable components.
- TypeScript — adds types to JavaScript.
- CSS — used for styling and responsive design.
- TheMealDB API — provides recipe data.
- Git and GitHub — used for version control.



## Getting Started

To run this project locally:

1. Clone the repository:

   git clone https://github.com/tatkaprokopova932-art/recipe-explorer.git

2. Open the project folder:

   cd recipe-explorer

3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open http://localhost:3000 in your browser.

To create a production build, run:

   npm run build



## Target Audience

Recipe Explorer is designed for people who enjoy cooking and want to discover new meal ideas. It is especially useful for beginners who need simple access to ingredients and cooking instructions.

## Known Limitations

- Recipes are available only if they exist in TheMealDB API.
- The search works by recipe name, not by ingredients or categories.
- The website requires an internet connection to load recipe data.
- Users cannot save their favorite recipes.
