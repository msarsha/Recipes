var angular = require('angular');

var bgImage = require('./bg-image.directive');

module.exports = angular.module('recipesBook.helpers', [])
  .directive('bgImage', bgImage);