// 3rd Party Resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');

// Prepare the express app
const app = express();
const userRoutes = require('./routes/routes.js');

// Process JSON input and put the data on req.body
app.use(express.json());


// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('this is working');
});

app.use(userRoutes);



module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}