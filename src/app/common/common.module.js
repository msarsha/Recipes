var angular = require('angular');

var bgImage = require('./bg-image.directive');
var toast = require('./toast.service');
var camera = require('./camera.service');

module.exports = angular.module('recipesBook.common', [])
  .directive('bgImage', bgImage)
  .service('rbToast', toast)
  .service('rbCamera', camera);