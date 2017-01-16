/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank')
      .directive('rankSingle', rankSingle);

  /** @ngInject */
  function rankSingle() {
    return {
      restrict: 'E',
      controller: 'rankSingleCtrl',
      templateUrl: 'app/pages/medal/rank/rankSingle/rankSingle.html'
    };
  }
})();