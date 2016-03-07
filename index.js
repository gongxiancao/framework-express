var express = require('express');

module.exports = function (done) {
  var self = this;
  self.express = express;
  self.expressApp = express();
  process.nextTick(done);
};

