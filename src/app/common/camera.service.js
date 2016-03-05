/* global Camera */
module.exports = function ($cordovaCamera) {
  var service = this;

  service.getPicture = function () {
    var options = {
      quality: 60,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    };

    return $cordovaCamera.getPicture(options);
  }
}