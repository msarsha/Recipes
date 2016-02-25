module.exports = function ($scope, $mdDialog) {
  
  var vm = this;
  vm.save = save;
  vm.close = close;
  vm.recipe = {};
  
  function close() {
    $mdDialog.cancel();
  };
  
  function save() {
    vm.recipe.imagePath = 'http://lorempixel.com/1920/1080/food/';
    $mdDialog.hide({recipe: vm.recipe});
  }
  
};
