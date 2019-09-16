# Project Overview

## Contributors

Eloise Barrow
<br>Jad Izzedin
<br>AJ Jernigan

## Project Links
- [View Github Repo](https://github.com/eloisebarrow/seeNYC)
<br>Deployment: TBA

## Project Description

seeNYC is a concierge app that is built for tourists by New Yorkers. Users can browse a curated list of the best restaurants and sites according to locals. They also have the option to create an account, save their favorites to a personal list and rate destinations.

## Installation Instructions
Type the following into the command line in the project's root folder:

```npm i body-parser cors express morgan sequelize pg bcrypt jsonwebtoken nodemon```

Type the following inside the client folder:

```npm i axios react-router-dom```

## Technologies Used

React
<br>Express.js
<br>Postgres
<br>Sequelize
<br>Body-parser
<br>CORS
<br>Bcrypt
<br>JSON Web Token
<br>Nodemon
<br>Morgan
<br>react-router-dom
<br>axios

## API Description

We'll be building out a unique, RESTful API using Postgres, Sequelize and Express.

The API will include four models - destinations, users, user_favorites and ratings.

The destinations model will hold at least 30 unique restaurants/sites with the following data for each: name, borough, address, website, description, type (food or fun) and latitude/longitude coordinates.

The users model will hold all users who sign up for an account; data included will be a username (which will be their email address), nickname and a password_digest.

User_favorites will connect each user with the locations they've added to their favorites and the ratings model will have a column for ratings 1 through 5.

## User Stories

Who are our users?
What do they want?
Why?

User 1:
Individual comes to New York on vacation looking for things to do. They open the app to browse, decide they like what they see - create an account and make a list of favorites that they want to check out.

User 2:
Local wants to find new places to check out, browses through the site and creates an account to save their list. They rate places they've been to and update ratings for places they revisit.

## MVP (Minimum Viable Product)

- Database populated with restaurant/site data, and empty user and user_favorites models
- Express web server that hosts database
- Landing page with header, main, footer
- Render all restaurant data
- Render all site data
- Render individual destination data

## PostMVP

- Reset password functionality
- Attach a map to individual destination pages
- Additional site/restaurant data

## Wireframes

- [Wireframes](https://res.cloudinary.com/jadscloudinary/image/upload/v1568571423/seeNYC_wireframes_sbsp6z.png)

## ERD

- [View ERD Diagram](https://drive.google.com/file/d/15lGRzK_Hznqutlp-rQ1VUL7Euo0yYoh6/view)


## React Architecture

- [View React Architecture Diagram](https://drive.google.com/file/d/1Ez8zWn7taYAG9kxlC6VrEyWoInrY7N8q/view)

## Additional Libraries

Mapbox (PostMVP)

## Issues and Resolutions

**ERROR**: Data would not generate from our seed file, error read "Cannot read property length of undefined"
<BR>**RESOLUTION**: We had to import the data in its own variable instead of through object destructuring.
