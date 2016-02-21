var template = require('./toolbar.html');
var ctrl = require('./toolbar.controller');
require('./toolbar.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};