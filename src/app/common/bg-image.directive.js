module.exports=  function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var imgUrl = attrs.bgImage;
      
      element.css({
        'background-image': 'url(' + imgUrl + ')',
        'background-size': 'cover'
      });
    }
  }
}