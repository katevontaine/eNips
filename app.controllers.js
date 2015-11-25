(function () {

    angular
    .module('eNip')

    .controller('MainController', function ($scope) {

    })

.controller('ItemController', function ($scope, ItemService) {

  ItemService.getItem().success(function (cat) {
    console.log(cat);
    $scope.cats = cat;
  });


  $scope.addItem = function (theItem){
    ItemService.newItem(theItem);
};
$scope.getItem = function (theItem){
  ItemService.newItem(theItem);
};
$scope.editItem = function (theItem){
  ItemService.newItem(theItem);
};
$scope.deleteItem = function (theItem){
  ItemService.deleteItem(theItem);
};


})
.controller('CartController', function ($scope, CartService) {

  CartService.getItem().success(function (cat) {
    console.log(cat);
    $scope.cats = cat;
  });

  $scope.addToCart = function (theItem){
    CartService.newItem(theItem);
};

$scope.removeItem = function (theItem){
  CartService.deleteItem(theItem);
};

});


})();
