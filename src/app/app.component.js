/**
 * Created by smata on 19-Feb-16.
 */
var template = require('./app.html');
var ctrl = require('./app.controller.js');
require('./app.css');

module.exports = {
	template: template,
	controller: ctrl,
	controllerAs: 'vm'
};