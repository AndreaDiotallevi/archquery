# Archquery

[Description](#description) | [Live Website](#live-website) | [Technologies Used](#technologies-used) | [Challenges and Goals](#challenges-and-goals) | [Getting Started](#getting-started) | [How to Run the App](#how-to-run-the-app) | [How to Setup the Local Database](#how-to-setup-the-local-database) | [How to Run the Tests](#how-to-run-the-tests) | [Continuous Integration](#continuous-integration) | [Design Approach](#design-approach)

## Description

This is a full-stack application built with Node, Express, PostgreSQL, React and Redux that lets architects ask, respond and vote questions like software engineers do in Stackoverflow.

## Live Website

The application is deployed to Heroku at [https://archquery.herokuapp.com](https://archquery.herokuapp.com/).

## Technologies Used

- Main technologies:
  * [Node](https://nodejs.org/en/): a JavaScript runtime built on Chrome's V8 JavaScript engine I used to write JavaScript code on the server side.
  * [Express](https://expressjs.com/): a fast, unopinionated, minimalist web framework for Node.js I used to get, post and patch the albums information from / to the PostgreSQL database and the React single page app.
  * [PostgreSQL](https://www.postgresql.org/): the world's most advanced open source relational database.
  * [React](https://reactjs.org/): a JavaScript library I used to build the user interface and gather data from the Express and external APIs.
  * [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox): a flexible box layout module I used to design flexible responsive layout structure without using float or positioning.
  
- Testing frameworks:
  * [Jest](https://jestjs.io/): a JavaScript Testing Framework with a focus on simplicity.
  * [Enzyme](https://www.npmjs.com/package/enzyme): a JavaScript Testing utility for React that makes it easier to test the React Components' output.
  * [Supertest](https://www.npmjs.com/package/supertest): a npm package that gives you get the ability to send GET, POST, PUT, PATCH and DELETE requests.

## Challenges and Goals

[...]

## Getting Started

* Clone this repository and change into it
* Make sure you have [Node.js](https://nodejs.org/en/download/) installed
* Install all the back-end dependencies with ```npm install```
* Install all the front-end dependencies with ```npm run client-install```

## How to Run the App

* To start the Express server type ```npm run server```
* To start the React server type ```npm run client```
* To start both servers concurrently type ```npm run dev```

## How to Setup the Local Database

[...]

## How to Run the Tests

* To run all the express API endpoints tests type ```npm test```
* To run all the React components tests type ```npm run client-test```

## Continuous Integration

[CircleCI](https://circleci.com/): tool for automating the development process quickly, safely, and at scale.
