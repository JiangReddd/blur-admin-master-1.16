/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank')
    .controller('rankMonthCtrl', rankMonthCtrl);

  /** @ngInject */
  function rankMonthCtrl($scope, $timeout, $http, baConfig, baUtil) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    //$http.get('app/pages/medal/rank/rankMonth/rankMonth.json').then(function(response) {
    $http.get('/user/getMedalChartsOfMonth').then(function(response) {
      $scope.charts = response.data.body.map(function(i) {
        i.color = pieColor;
        return i;
      });
      console.log(response.data.body[0]);
      console.log($scope.charts);
    });

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function() {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function() {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function() {
      loadPieCharts();
      updatePieCharts();
    }, 1000);
  }

})();
