module.exports = function ($state) {
  var service = this;
  service.title = "toolbar";
  service.filter = "";
  service.showSearch = false;
  service.goBack = goBack;
  service.prevState = "";

  function goBack() {
    if (service.prevState)
      return $state.go(service.prevState);
    return $state.go('home');
  }
};