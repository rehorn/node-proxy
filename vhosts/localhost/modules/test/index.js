'use strict';

module.exports = function*(next) {
  this.body = 'inner test';
};