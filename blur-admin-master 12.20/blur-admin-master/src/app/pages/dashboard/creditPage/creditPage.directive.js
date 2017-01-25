/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('creditPage', creditPage);

  /** @ngInject */
  function creditPage() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/creditPage/creditPage.html'
    };
  }
})();