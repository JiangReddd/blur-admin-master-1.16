/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.accumulationRelease', {
          url: '/accumulationRelease',
          templateUrl: 'app/pages/management/accumulationRelease/content.html',
          abstract: true,
          title: '积分发放记录',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 500,
          },
        }).state('management.accumulationRelease.list', {
          url: '/list',
          templateUrl: 'app/pages/management/accumulationRelease/accumulationRelease.html',
          controller:'accumulationReleaseCtrl',
          controllerAs:'releaseCtrl',
          title: '积分发放记录',
        }).state('management.accumulationRelease.detail', {
          url: '/detail/:id',
          templateUrl: 'app/pages/management/accumulationRelease/accumulationDetail.html',
          controller:'accumulationDetailCtrl',
          controllerAs:'detailCtrl',
          title: '积分发放记录',
        });
    $urlRouterProvider.when('/management/accumulationRelease','/management/accumulationRelease/list');
  }

})();