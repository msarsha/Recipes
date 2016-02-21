/**
 * Created by smata on 20-Feb-16.
 */

module.exports = function ($mdSidenav) {
	var service = this;
	service.toggle = toggle;

	function toggle(){
		return $mdSidenav('left').toggle();
	}
};