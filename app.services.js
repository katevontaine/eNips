
(function () {
  "use strict";
  angular
    .module('eNip')
    .factory('ItemService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/kateecommerce';

      var addItem = function (newItem) {
        $http.post(url, newItem).then(function (res) {
          console.log(newItem);
        });
      };

      var getItem = function () {
        return $http.get(url);
      };

      var editItem = function () {
        return $http.put(url + id, data);
      };
      var deleteItem = function () {
        return $http.delete();
      };

      return {
        newItem: addItem,
        getItem: getItem,
        editItem: editItem,
        deleteItem: deleteItem

      };

    });
})();
