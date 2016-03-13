/*
 * api.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var apiRouter = require('express').Router();

apiRouter.get('/blogs', function (req, res) {
  res.send('listing all the blog!!!');
});

module.exports = apiRouter;
