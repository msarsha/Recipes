module.exports = function ($mdToast, $document) {
  var service = this;

  service.toast = function (message) {
    var toast = $mdToast.simple()
      .parent($document[0].querySelector('#toastBounds'))
      .textContent(message)
      .position('top')
      .hideDelay(3000)

    $mdToast.show(toast);
  }
}