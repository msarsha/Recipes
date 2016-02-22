module.exports = function (rbToolbar, rbSidenav) {
  var vm = this;

  vm.showSearch = false;
  vm.rbToolbar = rbToolbar;
  vm.openSidenav = openSidenav;
  vm.closeFilter = closeFilter;

  function openSidenav(){
    rbSidenav.toggle();
  }
  
  function closeFilter() {
    vm.showSearch = !vm.showSearch;
    vm.rbToolbar.filter = "";
  }
};
