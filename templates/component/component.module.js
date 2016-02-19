var angular = require('angular');
var component = require('<%= name %>.component');

module.exports = angular.module('recipesBook.<%= name %>', [])
  .component('<%= name %>', component);