This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

A lot of bootstrapped generators are great but are either too limited or add a lot of junk into the project, here I wanted to create something that would allow me to create a project of any scale using the latest technologies.

## About

This is a template project to contain the complete setup for a full stack TypeScript project. Using the most popular tools this repo aims to make it super quick and easy to get going with an app of any scale as it contains all the basic setup needed for almost any project.

### React
Bootstrapped with the create react app in Typescript the frontend is setup with:
 - Redux 
 - React-Router-Dom 
 - Styled-components
 - TailwindCSS 

### TailwindCSS
Tailwind has been fully intergrated into the frontend to allow for a much easier way to deal with the styles, this provides more flexabiity that can be used well alongside styled-components

### Express
The backend is using ExpressJS with OvernightJS to better organise the controllers using decorators without having to use a much bigger framework like Nest.

### TypeORM / Database
THe database connection is controlled with TypeORM that will is currently setup with mySQL but can easily be switched to any other database supported.

## Setup

in the .env add in the following parameters to connect to the database:

`DB_HOST=HOST_ADDRESS`

`DB_USERNAME=DB_USERNAME`

`DB_PASSWORD=DB_PASSWORD`

`DB_NAME=NAME_OF_DATABASE`
