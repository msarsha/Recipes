var template = require('./newRecipeForm.html');
var ctrl = require('./newRecipeForm.controller');
require('./newRecipeForm.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};