module.exports = function ($state, rbToolbar) {
  var vm = this;

  vm.greeting = "recipe";
  vm.rbToolbar = rbToolbar;
  vm.goBack = goBack;

  init();

  function init() {
    vm.rbToolbar.showBack = true;
    vm.rbToolbar.showSearch = false;
    vm.rbToolbar.title = vm.recipe.title;
  }

  function goBack() {
    $state.go('home');
  }


};
