const server = require('./src/server.js');

const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3333;


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log('mongo connected'));


server.start(PORT);