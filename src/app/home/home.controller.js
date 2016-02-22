var _ = require('lodash');

module.exports = function (rbToolbar, recipesModel, $state) {
  var vm = this;

  vm.rbToolbar = rbToolbar;
  vm.rbToolbar.title = "המתכונים שלי";
  vm.rbToolbar.showSearch = true;
  vm.rbToolbar.showBack = false;
  
  vm.goToDetails = goToDetails;
  
  recipesModel.getAll()
    .then(function (data) {
      vm.recipes = data
    });

  function goToDetails(id) {
    $state.go('recipe', { recipeId: id });
  }
};
