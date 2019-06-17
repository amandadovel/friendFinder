# Friend Finder 👯
https://floating-anchorage-38733.herokuapp.com/

This is a compatibility-based "Friend Finder" application -- basically a dating app. The site will take in results from users' surveys, then will compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

<img src="friendFinderHomepage.png" alt="Friend Findder home image">

## Functionality 💪
#### Here's how the app works: 
1. Welcome to Friend Finders!

    1.1. This is the html home page with a button that takes users to survey. 

2. Take survey

    2.1. This page will ask user for name and a link to a photo. Then user will answer 10 questions. After hitting submit, a modal will pop up with their best match. 

## Getting Started 🏁

These instructions will get you a copy of the project up and running on your local machine for grading and testing purposes. 

1. Clone repository. Click on the clone button next to the repository (clone with SSH). 
2. Open Terminal and git clone (paste) into directory of your choice. 
3. Open folder in VS Code. 
4. Inside of the data directory is the `friends.js` file containing the list of ideal matches already stored in the database. 
5. The public directory contains assets, with the html files, the CSS directory with the stylesheet, the images and `app.js` which contains the logic for the submit button on the main page, checks validity of form, and controls the modal.
6. Inside of the routing directory holds the `htmlRoutes` which controls the path to each html page from the browswer. The `apiRoutes` contains the logic for the compatibility check and pushes the results.
7. `server.js` configures the app, requires the dependencies and starts listening on the PORT indicated.

## Pre-Requisites ✔️

1. Node - use this site to install node into your computer: https://nodejs.org/en/download/
    *to check if node is installed type node -v into your terminal. If installed it will print the version number on the screen.
2. NPM - Node Package Manager. Use this site to assist in downloading packages or modules: https://www.npmjs.com/


## Built With 🔧

* [Node] (https://nodejs.org/en/download/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications. 
* [Javascript] (https://www.javascript.com/) -JavaScript is the programming language of HTML and the Web
* [JSON] (https://www.json.org/) - Javascript object notation, syntax for storing and exchanging information. 
* [Express] (https://www.npmjs.com/package/express) - Node.js web app framework designed to make developing websites, web apps, & API's much easier.
 

## Author ⌨️
*** Amanda Dovel *** - [amandadovel](https://github.com/amandadovel)

## Acknowledgments 🌟

* Amber Burroughs, Tutoring badass