
(function () {
  "use strict";

  angular
    .module('eNip', [
      'ngRoute',
      'underscore'

    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/shop', {
          templateUrl: 'views/consumer.html',
          controller: 'ItemController'
        })
        .when('/shop/shop:Id', {
          templateUrl: 'views/item.html',
          controller: 'ItemController'
        })
        .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'ItemController'
        })
        .when('/cart', {
          templateUrl: 'views/cart.html',
          controller: 'ItemController'
        })
        .when('/404', {
          template: "<h1> SORRY NO BUENO </h1>"
        })
        .otherwise("/404")
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });


})();
