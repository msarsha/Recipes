module.exports = function ($state, rbToolbar, $window) {
  var vm = this;

  vm.greeting = "recipe";
  
  vm.rbToolbar = rbToolbar;
  vm.goBack = goBack;
  vm.enlarge = enlarge;

  init();

  function init() {
    vm.rbToolbar.showBackButton = true;
    vm.rbToolbar.showSearchButton = false;
    vm.rbToolbar.title = vm.recipe.title;
  }

  function goBack() {
    $state.go('home');
  }

  function enlarge(image) {
    $window.location.href = image;
  }

};
