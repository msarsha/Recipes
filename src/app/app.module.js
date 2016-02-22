/**
 * Created by smata on 18-Feb-16.
 */

var angular = require('angular');
var ngMaterial = require('angular-material');
var uiRouter = require('angular-ui-router');

var resources = require('./resources/resources.module');
var models = require('./models/models.module');

var appComponent = require('./app.component');
var home = require('./home/home.module');
var toolbar = require('./components/toolbar/toolbar.module');
var sidenav = require('./components/sidenav/sidenav.module');
var recipes = require('./components/recipes/recipes.module');

angular.module('recipesBook', [
		ngMaterial,
		uiRouter,

		resources.name,
		models.name,

		home.name,
		toolbar.name,
		sidenav.name,
		recipes.name
])
  .component('app', appComponent)
  .config(function ($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('indigo');
  });