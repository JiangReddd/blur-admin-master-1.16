/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationInquiry', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.accumulationInquiry', {
          url: '/accumulationInquiry',
          templateUrl: 'app/pages/management/accumulationInquiry/content.html',
          abstract: true,
          title: '用户积分信息',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 500,
          },
        }).state('management.accumulationInquiry.list', {
          url: '/list',
          templateUrl: 'app/pages/management/accumulationInquiry/accumulationInquiry.html',
          controller:'accumulationInquiryCtrl',
          controllerAs:'inquiryCtrl',
          title: '用户积分信息',
        });
    $urlRouterProvider.when('/management/accumulationInquiry','/management/accumulationInquiry/list');
  }

})();