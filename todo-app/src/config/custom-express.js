require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const socket = require('socket.io');
const routes = require('../routes');

module.exports = () => {
  const app = express();

  // Body Parser Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Morgan Middleware
  app.use(morgan('dev'));

  // CORS
  app.use(cors());

  // Connect to MongoDb
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  // RealTime Middleware
  const server = http.Server(app);
  const io = socket(server);

  app.use((req, res, next) => {
    req.io = io;

    return next();
  });

  // Routes
  app.use('/api', routes);

  return server;
};
