/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank')
      .directive('rankMonth', rankMonth);

  /** @ngInject */
  function rankMonth() {
    return {
      restrict: 'E',
      controller: 'rankMonthCtrl',
      templateUrl: 'app/pages/medal/rank/rankMonth/rankMonth.html'
    };
  }
})();