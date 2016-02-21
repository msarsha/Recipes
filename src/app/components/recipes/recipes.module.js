var angular = require('angular');
var component = require('./recipes.component');

module.exports = angular.module('recipesBook.recipes', [])
  .component('rbRecipes', component);