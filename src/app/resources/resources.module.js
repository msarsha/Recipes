/**
 * Created by smata on 20-Feb-16.
 */

var angular = require('angular');

var recipesResource = require('./recipes.resource');

module.exports = angular.module('recipesBook.resources', [])
  .service('recipesResource', recipesResource);