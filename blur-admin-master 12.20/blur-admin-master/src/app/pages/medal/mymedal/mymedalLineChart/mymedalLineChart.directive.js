/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.mymedal')
      .directive('mymedalLineChart', mymedalLineChart);

  /** @ngInject */
  function mymedalLineChart() {
    return {
      restrict: 'E',
      controller: 'MymedalLineChartCtrl',
      templateUrl: 'app/pages/medal/mymedal/mymedalLineChart/mymedalLineChart.html'
    };
  }
})();