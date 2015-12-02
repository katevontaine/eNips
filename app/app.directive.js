(function () {
  "use strict"; // <flickr-photo>
  angular
    .module('eNip')
    .directive('addCart', function () {
      return {
        restrict: 'E',
        templateUrl: 'views/directive.html',
        scope: {
          item: '=',
          action: '&'
        },
      };
    });

})();
