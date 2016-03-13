/*
 * blog.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String
}, {collection: 'blog'});

module.exports = BlogSchema;
