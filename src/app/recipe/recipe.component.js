var template = require('./recipe.html');
var ctrl = require('./recipe.controller');
require('./recipe.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm',
  bindToController: true,
  bindings: {
    recipe: '='
  }
};