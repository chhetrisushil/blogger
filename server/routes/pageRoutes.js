/*
 * pageRoutes.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var pageRouter = require('express').Router(),
  path = require('path');

function pathGenerator(fileName) {
  return [fileName, {
    root: path.join(__dirname, '../../client/pages')
  }];
}

pageRouter.get('/', function(req, res) {
  res.sendFile.apply(res, pathGenerator('index.html'));
});

module.exports = pageRouter;
