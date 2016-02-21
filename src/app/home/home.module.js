var angular = require('angular');
var component = require('./home.component');

module.exports = angular.module('recipesBook.home', [])
	.component('home', component)
	.config(function ($stateProvider) {
		$stateProvider.state('home', {
			template: '<home></home>',
			url: '/'
		})
	});