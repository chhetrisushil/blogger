/*
 * api.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var apiRouter = require('express').Router(),
  bodyParser = require('body-parser'),
  BlogModel = require('../models/blog.js');

apiRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

apiRouter.use(bodyParser.json());

apiRouter.get('/blogs', function(req, res) {
  BlogModel.find(function(err, Blogs) {
    if (err) {
      return res.send('failed');
    }

    res.json(Blogs);
  });
});

apiRouter.post('/blogs', function(req, res) {
  var post = new BlogModel(req.body);

  post.save(function(err, item) {
    res.json(item);
  });
});

module.exports = apiRouter;
