var angular = require('angular');
var component = require('./newRecipeDialog.component');

module.exports = angular.module('recipesBook.newRecipeDialog', [])
  .component('newRecipeDialog', component);