var _ = require('lodash');

module.exports = function (rbToolbar, recipesModel, $state) {
  var vm = this;

  vm.rbToolbar = rbToolbar;
  vm.goToDetails = goToDetails;

  init();

  function init() {
    vm.rbToolbar.title = "המתכונים שלי";
    vm.rbToolbar.showSearchButton = true;
    vm.rbToolbar.showBackButton = false;

    recipesModel.getAll()
      .then(function (data) {
        vm.recipes = data
      });
  }

  function goToDetails(id) {
    vm.rbToolbar.showSearchBar = false;
    vm.rbToolbar.filter = "";
    $state.go('recipe', { recipeId: id });
  }
};
