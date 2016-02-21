var _ = require('lodash');

module.exports = function (rbToolbar) {
  var vm = this;
  vm.greeting = "home";
  rbToolbar.title = "המתכונים שלי";

	vm.recipes = _.times(15, function (i) {
		return {
			id: i,
			imagePath: 'http://lorempixel.com/400/200/food/',
			desc: "להקציף, לערבב ולהכניס לתנור",
			title: "מתכון " + i
		}
	})
};
