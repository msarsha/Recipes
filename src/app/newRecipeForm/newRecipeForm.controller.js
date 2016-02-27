module.exports = function (rbToolbar, recipesModel, $state, $mdToast, $document) {
  var vm = this;
  rbToolbar.title = "מתכון חדש";
  rbToolbar.showSearchButton = false;
  rbToolbar.showBackButton = false;

  vm.save = save;

  function save() {
    vm.recipe.imagePath = 'http://lorempixel.com/1920/1080/food/';
    recipesModel.item = vm.recipe;
    recipesModel.save().then(function () {
      var toast = $mdToast.simple()
        .parent($document[0].querySelector('#toastBounds'))
        .textContent('מתכון נשמר')
        .position('top')
        .hideDelay(3000)

      $mdToast.show(toast);
      $state.go('home');
    });
  }
};
