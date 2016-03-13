/*
 * main.js
 * Copyright (C) 2016 chhetrisushil <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
(function(W) {
  "use strict";

  function ajax(method, url, params) {
    var promise = new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open(method, url, true);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.response);
        }
      };

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(params);
    });

    return promise;
  }

  var getBlogs = ajax('GET', '/api/blogs');

  getBlogs.then((res) => console.log(JSON.parse(res).map((item) => item.title)));

  // var setBlogs = ajax('POST', '/api/blogs', JSON.stringify({
  //       title: 'Second blog title'+Math.random()*10,
  //   content: 'Second blog Content',
  //   author: 'chhetrisushil'
  // }));
  //
  // setBlogs.then(function (res) {
  //   console.log(res);
  // });
})(window);
