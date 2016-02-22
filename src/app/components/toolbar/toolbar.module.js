var angular = require('angular');
var component = require('./toolbar.component');
var service = require('./toolbar.service');

module.exports = angular.module('recipesBook.toolbar', [])
	.component('rbToolbar', component)
	.service('rbToolbar', service)
  .run(function ($rootScope, rbToolbar) {
    $rootScope.$on('$stateChangeSuccess', function (evt, to, toParams, from, fromParams) {
      rbToolbar.prevState = from.name;
    })
  });