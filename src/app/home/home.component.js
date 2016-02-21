var template = require('./home.html');
var ctrl = require('./home.controller');
require('./home.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};