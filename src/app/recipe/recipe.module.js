var angular = require('angular');
var component = require('./recipe.component');

module.exports = angular.module('recipesBook.recipeDetails', [])
  .component('rbRecipeDetails', component)
  .config(function ($stateProvider) {
    $stateProvider.state('recipe', {
      url: '/recipe/:recipeId',
      template: '<rb-recipe-details recipe="vm.recipe" layout="column" flex></rb-recipe-details>',
      controllerAs: 'vm',
      controller: function ($scope, recipe) {
        var vm = this;
        vm.recipe = recipe;
      },
      resolve: {
        recipe: function ($stateParams, $state, recipesModel) {
          return recipesModel.getOne($stateParams.recipeId)
            .catch(function () {
              $state.go('home');
            });
        }
      }
    })
  });