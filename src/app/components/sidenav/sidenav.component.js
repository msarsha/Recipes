var template = require('./sidenav.html');
var ctrl = require('./sidenav.controller');
require('./sidenav.css');

module.exports = {
  template: template,
  controller: ctrl,
  controllerAs: 'vm'
};