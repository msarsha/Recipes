module.exports = function ($state) {
  var service = this;
  service.title = "toolbar";
  service.filter = "";
  service.showSearchButton = false;
  service.showSearchBar = false;

  service.showBackButton = false;
  service.backButtonIcon = "fa fa-arrow-left";
  service.goBack = goBack;

  service.prevState = "";

  function goBack() {
    if (service.prevState)
      return $state.go(service.prevState);
    return $state.go('home');
  }
};