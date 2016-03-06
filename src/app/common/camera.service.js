/* global Camera */
module.exports = function ($cordovaCamera) {
  var service = this;

  service.getPicture = function () {
    var options = {
      quality: 40,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      // targetHeight: 600,
      // targetWidth: 800,
      // allowEdit: true
    };

    return $cordovaCamera.getPicture(options);
  }
}