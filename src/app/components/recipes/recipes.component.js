var template = require('./recipes.html');
var ctrl = require('./recipes.controller');
require('./recipes.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm',
	bindToController: true,
  bindings: {
		recipes: '<',
		onDelete: '&'
	}
};