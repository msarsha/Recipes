var angular = require('angular');

module.exports = function (recipesResource, $q) {
  var service = this;
  service.$q = $q;
  service.collection;
  service.item;

  service.getAll = getAll;
  service.getOne = getOne;
  service.save = save;

  function getAll(force) {
    if (!service.collection || force) {
      return recipesResource.getAll()
        .then(function (data) {
          service.collection = data;
          return service.$q.when(service.collection);
        });
    }

    return $q.when(service.collection);
  }

  function getOne(id) {
    if (!id) {
      return service.$q.reject();
    }

    if (service.item && id == service.item.id) {
      return service.$q.when(service.item);
    }

    if (!service.collection) {
      return recipesResource.getOne(id)
        .then(function (data) {
          return $q.when(data);
        });
    }

    service.item = {};
    var isFound = false;

    angular.forEach(service.collection, function (val, key) {
      if (val.id == id) {
        service.item = val;
        isFound = true;
      }
    });

    if (isFound)
      return service.$q.when(service.item);
    return service.$q.reject();
  }

  function save() {
    if (!service.item)
      return service.$q.reject();

    return recipesResource.save(service.item).then(function (data) {
      return service.item = data;
    })
  }
}