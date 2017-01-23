/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalRelease', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.medalRelease', {
          url: '/medalRelease',
          templateUrl: 'app/pages/management/medalRelease/medalContent.html',
          title: '勋章发放记录',
          abstract: true,
          sidebarMeta: {
            order: 200,
          },
        }).state('management.medalRelease.list', {
          url: '/list',
          templateUrl: 'app/pages/management/medalRelease/medalRelease.html',
          controller:'medalReleaseCtrl',
          controllerAs:'releaseCtrl',
          title: '勋章发放记录',
          sidebarMeta: {
            order: 200,
          },
        }).state('management.medalRelease.detail', {
          url: '/detail/:medalRecordId',
          templateUrl: 'app/pages/management/medalRelease/medalDetail.html',
          controller:'medalDetailCtrl',
          controllerAs:'detailCtrl',
          title: '勋章发放记录详细信息',
        });
    $urlRouterProvider.when('/management/medalRelease','/management/medalRelease/list');
  }

})();