/**
 * Created by smata on 20-Feb-16.
 */

var angular = require('angular');

var recipesModel = require('./recipes.model');

module.exports = angular.module('recipesBook.models', [])
  .service('recipesModel', recipesModel);