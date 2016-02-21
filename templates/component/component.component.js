var template = require('./<%= name %>.html');
var ctrl = require('./<%= name %>.controller');
require('./<%= name %>.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};