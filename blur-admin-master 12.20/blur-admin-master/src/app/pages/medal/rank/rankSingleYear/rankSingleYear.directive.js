/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank')
      .directive('rankSingleYear', rankSingleYear);

  /** @ngInject */
  function rankSingleYear() {
    return {
      restrict: 'E',
      controller: 'rankSingleYearCtrl',
      templateUrl: 'app/pages/medal/rank/rankSingleYear/rankSingleYear.html'
    };
  }
})();