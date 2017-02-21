/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.history', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('accumulation.history', {
        url: '/history',
        templateUrl: 'app/pages/accumulation/history/history.html',
          title: '积分发放记录',
          controller: 'accumulationHistoryReleaseCtrl',
          controllerAs: 'releaseCtrl',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();