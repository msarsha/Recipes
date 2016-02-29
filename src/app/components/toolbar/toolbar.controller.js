module.exports = function (rbToolbar, rbSidenav) {
  var vm = this;

  vm.rbToolbar = rbToolbar;
  vm.rbToolbar.showSearchBar = false;
  vm.openSidenav = openSidenav;
  vm.closeFilter = closeFilter;
  vm.goBack = goBack;

  function openSidenav(){
    rbSidenav.toggle();
  }
  
  function closeFilter() {
    vm.rbToolbar.showSearchBar = !vm.rbToolbar.showSearchBar;
    vm.rbToolbar.filter = "";
  }
  
  function goBack() {
    vm.rbToolbar.goBack();
  }
};