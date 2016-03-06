var _ = require('lodash');

module.exports = function ($q, $http) {
  var service = this;

  init();

  service.$q = $q;
  service.getAll = getAll;
  service.getOne = getOne;
  service.save = save;

  function init() {
    service.collection = _.times(15, function (i) {
      return {
        id: i,
        imagePath: 'http://lorempixel.com/800/600/food/',
        images: ['http://www.zastavki.com/pictures/1680x1050/2011/Food_Pizza_Delicious_pizza_029580_.jpg','http://www.zastavki.com/pictures/1680x1050/2011/Food_Pizza_Delicious_pizza_029580_.jpg', 'http://www.zastavki.com/pictures/1680x1050/2011/Food_Pizza_Delicious_pizza_029580_.jpg', 'http://www.zastavki.com/pictures/1680x1050/2011/Food_Pizza_Delicious_pizza_029580_.jpg'],
        desc: "להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור להקציף, לערבב ולהכניס לתנור \n להקציף, לערבב ולהכניס לתנור \n להקציף, לערבב ולהכניס לתנור",
        title: "מתכון " + i
      }
    });
  }

  function getAll() {
    return service.$q.when(service.collection);
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
  
  function save(recipe) {
    var newId = service.collection.length;
    recipe.id = newId;
    service.collection.push(recipe);
    return $q.when(recipe);
  }
}