/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.history', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('medal.history', {
        url: '/history',
        templateUrl: 'app/pages/medal/history/content.html',
        abstract: true,
        title: '发放记录',
        sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      }).state('medal.history.list', {
        url: '/list',
        templateUrl: 'app/pages/medal/history/historyRelease.html',
        controller:"historyReleaseCtrl",
        controllerAs:"releaseCtrl",
        title: '发放记录',
      }).state('medal.history.detail', {
        url: '/detail/:medalRecordId',
        templateUrl: 'app/pages/medal/history/historyDetail.html',
        controller:"historyDetailCtrl",
        controllerAs:"detailCtrl",
        title: '发放记录',
      });
    $urlRouterProvider.when('/medal/history','/medal/history/list');
  }
})();