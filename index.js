var express = require('express');

module.exports = function (done) {
  var self = this;
  return new Promise(function (resolve) {
    self.express = express;
    self.expressApp = express();
    resolve();
  });
};

