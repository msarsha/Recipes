var angular = require('angular');
var service = require('./newRecipeDialog.service');

require('./newRecipeDialog.css');

module.exports = angular.module('recipesBook.newRecipeDialog', [])
  .service('rbDialog', service);