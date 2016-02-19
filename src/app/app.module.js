/**
 * Created by smata on 18-Feb-16.
 */

var angular = require('angular');
var ngMaterial = require('angular-material');
var uiRouter = require('angular-ui-router');

var appComponent = require('./app.component');

angular.module('recipesBook', [
		ngMaterial,
		uiRouter
])
	.component('app', appComponent);