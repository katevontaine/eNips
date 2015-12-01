(function () {

    angular
    .module('eNip')

    .controller('MainController', function ($scope) {
      var vm = this;
      vm.hey = "hey main controller."
    })

.controller('ItemController', function ($scope, ItemService, CartService, $routeParams, $location) {

  ItemService.getItem().success(function(cat) {
      $scope.cats = cat;
    });
    console.log($routeParams.shopid)

    if($routeParams.shopid) {
      ItemService.getSingleItem($routeParams.shopid).success(function(cat) {
        var catItem = {
          name: cat.name,
          description: cat.description,
          price: cat.price,
          image: cat.image
        };
        $scope.item = catItem;
      });
    }



  $scope.addItem = function (theItem){
    ItemService.newItem(theItem);
    $location.path('/shop');
  };
  $scope.getItem = function (theItem){
    ItemService.newItem(theItem);
  };
  $scope.getSingleItem = function (theItem){
    ItemService.newItem(theItem);
  };
  $scope.editItem = function (theItem){
    ItemService.newItem(theItem);
  };
  $scope.deleteItem = function (theItem){
    ItemService.deleteItem(theItem);
  };

  $scope.addToCart = function(item) {
    CartService.addToCart(item);
  };


})
.controller('CartController', function ($scope, CartService) {
  var vm = this
  CartService.getCartItems().success(function(cats) {
    vm.cats = cats;
   });

  // $scope.addToCart = function (theItem){
  //   CartService.newItem(theItem);
  // };

  $scope.removeItem = function (theItem){
    CartService.deleteItem(theItem);
    console.log("item deleted from cart");
  };

});


})();
