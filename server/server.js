/*
 * server.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

// import all the modules
var express = require('express'),
  morgan = require('morgan'),
  path = require('path'),
  mongoose = require('mongoose'),
  routes = require('./routes'),
  pageRoutes = routes.pageRoutes,
  api = routes.api;

// variable declaration
var app = express();

// setup middlewares
app.use(morgan('combined')); // request/response logger
app.use('/pages', express.static(path.join(__dirname, '../client/pages'))); // make *.html files accessible
app.use('/js', express.static(path.join(__dirname, '../', 'client/js'))); // make *.js files accessible
app.use('/css', express.static(path.join(__dirname, '../', 'client/styles'))); // make *.css files accessible

// open connection to mongodb
mongoose.connect('mongodb://localhost/blogger');
mongoose.connection.on('error', function () {
  console.log(arguments);
});

mongoose.connection.on('open', function () {
  console.log('connected to db', arguments);
});

// setup routes
app.use('/', pageRoutes);
app.use('/api', api);

app.listen(3000);
