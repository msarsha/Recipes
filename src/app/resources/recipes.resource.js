var _ = require('lodash');

module.exports = function ($q, $http) {
  var service = this;

  service.$q = $q;
  service.getAll = getAll;
  service.getOne = getOne;

  function getAll() {
    return service.$q.when(_.times(15, function (i) {
      return {
        id: i,
        imagePath: 'http://lorempixel.com/800/600/food/',
        desc: "להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור \n להקציף, לערבב ולהכניס לתנור \n להקציף, לערבב ולהכניס לתנור",
        title: "מתכון " + i
      }
    }));
  }
  
  function getOne(id) {
    return service.getAll()
      .then(function (data) {
        var result = _.find(data, function (recipe) {
          return recipe.id == id;
        });
        
        if (result)
          return $q.when(result);
          
         return $q.reject();
      });
  }
}