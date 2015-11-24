(function () {

    angular
    .module('eNip')

    .controller('MainController', function ($scope) {

    })
    
.controller('ItemController', function ($scope, ItemService) {

  ItemService.getItem().success(function (cat) {
    console.log(cat);
    $scope.cat = cat;
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
  ItemService.newItem(theItem);
};


});

})();
