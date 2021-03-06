# 401 Lab 06 - Basic Auth Server

**Author: Jessi Velazquez**

**Repository Name:** basic-auth

**Branch name:** dev

## Links

Deployed Link: Have not deployed due to Mongo Atlas paywall.

Github Actions: [https://github.com/JessiVelazquez/basic-auth/actions](https://github.com/JessiVelazquez/basic-auth/actions) 

Pull Request: [https://github.com/JessiVelazquez/basic-auth/pull/6](https://github.com/JessiVelazquez/basic-auth/pull/6)

## Setup

1. Clone down github repository

2. Run ```npm i``` at terminal to install dependencies

3. Run ```nodemon``` or ```node index.js``` at terminal to start server

## Description

This is a server application that allows a new user to sign up with username and password on the /ignup route, or validates an existing user's credentials on the /signin route.

A valid JSON data object looks like this:

```
{ "username": "sampleUser", "password": "samplePassword" }
```

## Testing

To run tests, start the server and run ```npm run test``` at the terminal to run all tests

## Architecture

├── LICENSE
├── README.md
├── __tests__
│   └── server.tests.js
├── app.js
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── middleware
    │   └── basicAuth.js
    ├── models
    │   └── schema.js
    ├── routes
    │   └── routes.js
    └── server.js


## Contributors

Pair programming contributors were Simone Odegard, Lydia Minehan-Tubic, and Dan Engel.
