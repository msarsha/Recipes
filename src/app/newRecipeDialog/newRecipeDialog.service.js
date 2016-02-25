var template = require('./newRecipeDialog.html');
var ctrl = require('./newRecipeDialog.controller');
var angular = require('angular');

module.exports = function ($mdDialog) {
  var service = this;
  service.show = show;

  function show($event) {
    return $mdDialog.show({
      targetEvent: $event,
      template: template,
      controller: ctrl,
      controllerAs: 'vm',
      fullscreen: true,
      parent: angular.element(document.body)
    });
  }
}