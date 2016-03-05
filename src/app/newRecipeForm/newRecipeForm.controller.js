module.exports = function (rbToolbar, recipesModel, $state, rbToast, rbCamera) {
  var vm = this;
  rbToolbar.title = "מתכון חדש";
  rbToolbar.showSearchButton = false;
  rbToolbar.showBackButton = false;

  vm.save = save;
  vm.selectImage = selectImage;

  function save() {
    vm.recipe.imagePath = 'http://lorempixel.com/1920/1080/food/';
    recipesModel.item = vm.recipe;
    recipesModel.save().then(function () {
      rbToast.toast('מתכון נשמר');
      $state.go('home');
    });
  }

  function selectImage() {
    rbCamera.getPicture().then(function (result) {
      console.debug(result);
    });
  }
};
