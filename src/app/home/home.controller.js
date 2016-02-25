var _ = require('lodash');

module.exports = function (rbDialog, rbToolbar, recipesModel, $state) {
  var vm = this;

  vm.rbToolbar = rbToolbar;
  vm.goToDetails = goToDetails;
  vm.showDialog = showDialog;

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
    $state.go('recipe', { recipeId: id });
  }
  
  function showDialog($event) {
    rbDialog.show($event).then(function (result) {
      recipesModel.item = result.recipe;
      recipesModel.save().then(function () {
        console.log("saved");
      });
    });
  }
};
