/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalInquiry', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.medalInquiry', {
          url: '/medalInquiry',
          templateUrl: 'app/pages/management/medalInquiry/content.html',
          abstract: true,
          title: '用户勋章信息',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        }).state('management.medalInquiry.list', {
          url: '/list',
          templateUrl: 'app/pages/management/medalInquiry/medalInquiry.html',
          controller:'medalInquiryCtrl',
          controllerAs:'inquiryCtrl',
          title: '用户勋章信息',
        });
    $urlRouterProvider.when('/management/medalInquiry','/management/medalInquiry/list');
  }

})();