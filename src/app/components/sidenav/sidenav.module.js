var angular = require('angular');
var component = require('./sidenav.component');
var service = require('./sidenav.service');

module.exports = angular.module('recipesBook.sidenav', [])
  .component('rbSidenav', component)
	.service('rbSidenav', service);