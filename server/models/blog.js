/*
 * blog.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var mongoose = require('mongoose'),
  BlogSchema = require('../schemas/blog.js');

var BlogModel = mongoose.model('blog', BlogSchema, 'blog');

module.exports = BlogModel;
