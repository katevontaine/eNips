
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
          controller: 'MainController as MainCtrl'
        })
        .when('/shop', {
          templateUrl: 'views/consumer.html',
          controller: 'ItemController as ItemCtrl'
        })
        .when('/shop/:shopid', {
          templateUrl: 'views/item.html',
          controller: 'ItemController as ItemCtrl'
        })
        .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'ItemController as ItemCtrl'
        })
        .when('/cart', {
          templateUrl: 'views/cart.html',
          controller: 'CartController as CartCtrl'
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
