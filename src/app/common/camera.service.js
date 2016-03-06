/* global Camera */
module.exports = function ($cordovaCamera) {
  var service = this;

  service.getPicture = function () {
    var options = {
      quality: 20,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetHeight: 720,
      targetWidth: 1280,
      correctOrientation: true
      // allowEdit: true
    };

    return $cordovaCamera.getPicture(options);
  }
}