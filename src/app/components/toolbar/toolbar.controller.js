module.exports = function (rbToolbar, rbSidenav) {
  var vm = this;

  vm.showSearch = false;
  vm.rbToolbar = rbToolbar;
  vm.openSidenav = openSidenav;
  vm.closeFilter = closeFilter;
  vm.goBack = goBack;

  function openSidenav(){
    rbSidenav.toggle();
  }
  
  function closeFilter() {
    vm.showSearch = !vm.showSearch;
    vm.rbToolbar.filter = "";
  }
  
  function goBack() {
    vm.rbToolbar.goBack();
  }
};