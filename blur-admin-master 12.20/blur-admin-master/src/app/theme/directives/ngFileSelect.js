(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('ngFileSelect', ngFileSelect);

  /** @ngInject */
  function ngFileSelect() {
    return {
      link: function ($scope, el) {
        el.bind('change', function (e) {
          $scope.files = (e.srcElement || e.target).files[0];
          console.log($scope.files);
          $scope.getFile();
        })
      }
    }
  }

})();