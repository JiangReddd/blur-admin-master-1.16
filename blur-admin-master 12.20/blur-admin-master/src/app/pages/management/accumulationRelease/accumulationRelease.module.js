/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.accumulationRelease', {
          url: '/accumulationRelease',
          templateUrl: 'app/pages/management/accumulationRelease/accumulationRelease.html',
          controller:'accumulationReleaseCtrl',
          controllerAs:'releaseCtrl',
          title: '积分发放记录',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 500,
          },
        });
  }

})();