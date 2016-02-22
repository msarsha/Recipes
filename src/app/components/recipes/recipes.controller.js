module.exports = function () {
  var vm = this;
  vm.greeting = "recipes";
  vm.click = click;
  
  function click(id) {
    return vm.onClick({id: id});
  }
};
