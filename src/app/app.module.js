var angular = require('angular');
var ngMaterial = require('angular-material');
var uiRouter = require('angular-ui-router');

var resources = require('./resources/resources.module');
var models = require('./models/models.module');

var appComponent = require('./app.component');
var home = require('./home/home.module');
var recipesDetails = require('./recipe/recipe.module');

var toolbar = require('./components/toolbar/toolbar.module');
var sidenav = require('./components/sidenav/sidenav.module');
var recipes = require('./components/recipes/recipes.module');
var dialog = require('./newRecipeDialog/newRecipeDialog.module');
var recipeForm = require('./newRecipeForm/newRecipeForm.module');

var helpers = require('./helpers/helpers.module');

angular.module('recipesBook', [
		ngMaterial,
		uiRouter,

		models.name,
		resources.name,
    helpers.name,

		home.name,
		toolbar.name,
		sidenav.name,
		recipes.name,
    recipesDetails.name,
    dialog.name,
    recipeForm.name
])
  .component('app', appComponent)
  .config(function ($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');
  });