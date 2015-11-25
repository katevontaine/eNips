
(function () {
  "use strict";
  angular
    .module('eNip')
    .factory('CartService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/kateCart';

      var addToCart = function (newItem) {
        $http.post(url, newItem).then(function (res) {
          console.log(newItem);
          alert"clicked";
        });
      };

      var removeItem = function () {
         $http.delete(url + "/" + item._id);
      };
      return {
        addToCart: addToCart,
        removeItem: deleteItem
      };
    });
})();
