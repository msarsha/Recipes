module.exports = function (rbToolbar, recipesModel, $state, $mdToast, $document, $cordovaImagePicker) {
  var vm = this;
  rbToolbar.title = "מתכון חדש";
  rbToolbar.showSearchButton = false;
  rbToolbar.showBackButton = false;

  vm.save = save;
  vm.imagePicker = imagePicker;

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

  function imagePicker() {
    var options = {
      maximumImagesCount: 4,
      width: 800,
      height: 800,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options)
      .then(function (results) {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
        }
      }, function (error) {
        console.log(error);
      });
  }
};
