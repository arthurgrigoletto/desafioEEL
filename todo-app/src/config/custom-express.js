require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
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

  // Routes
  app.use('/api', routes);

  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set Static folder
    app.use(express.static(path.join(__dirname, '../../', 'client', 'build')));

    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../', 'client', 'build'));
    });
  }

  return app;
};
