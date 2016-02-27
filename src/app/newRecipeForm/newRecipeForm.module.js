var angular = require('angular');
var component = require('./newRecipeForm.component');

module.exports = angular.module('recipesBook.newRecipeForm', [])
  .component('rbNewRecipeForm', component)
  .config(function ($stateProvider) {
    $stateProvider.state('newRecipe', {
      url: '/newRecipe',
      template: '<rb-new-recipe-form></rb-new-recipe-form>'
    })
  });