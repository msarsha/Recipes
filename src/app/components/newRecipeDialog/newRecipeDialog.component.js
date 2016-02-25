var template = require('./newRecipeDialog.html');
var ctrl = require('./newRecipeDialog.controller');
require('./newRecipeDialog.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};