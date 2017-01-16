/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalRelease', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.medalRelease', {
          url: '/medalRelease',
          templateUrl: 'app/pages/management/medalRelease/medalRelease.html',
          controller:'medalReleaseCtrl',
          controllerAs:'releaseCtrl',
          title: '勋章发放记录',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 100,
          },
        });
  }

})();