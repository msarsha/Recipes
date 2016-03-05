module.exports = function (rbToolbar, recipesModel, $state, rbToast, $cordovaCamera) {
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
    var options = {
      quality: 60,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    };

    $cordovaCamera.getPicture(options).then(function (result) {
      console.log(result);
    });
  }
};
