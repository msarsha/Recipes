module.exports = function (rbToolbar, rbSidenav) {
  var vm = this;

  vm.rbToolbar = rbToolbar;
  vm.openSidenav = openSidenav;

  function openSidenav(){
    rbSidenav.toggle();
  }
};
