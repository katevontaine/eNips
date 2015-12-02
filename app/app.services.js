
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
      var getSingleItem = function(id) {
        return $http.get(url+"/"+id);
      };
      var editItem = function () {
        return $http.put(url + id, data);
      };
      var deleteItem = function (item) {
         $http.delete(url + "/" + item._id);
      };

      return {
        newItem: addItem,
        getItem: getItem,
        editItem: editItem,
        deleteItem: deleteItem,
        getSingleItem: getSingleItem
      };

    });
})();
