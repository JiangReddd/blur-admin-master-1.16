/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.userManagement', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.userManagement', {
          url: '/userManagement',
          abstract: true,
          templateUrl: 'app/pages/management/userManagement/userManagement.html',
          title: '用户信息管理列表',
          sidebarMeta: {
            order: 1000,
          },
        }).state('management.userManagement.list', {
          url: '/list',
          templateUrl: 'app/pages/management/userManagement/userManagement1.html',
          controller:'userManagementCtrl',
          controllerAs:'managementCtrl',
          title: '用户信息管理列表',
        }).state('management.userManagement.add', {
          url: '/add',
          templateUrl: 'app/pages/management/userManagement/userManagementAdd.html',
          controller:'userManagementAddCtrl',
          controllerAs:'addCtrl',
          title: '新增用户信息',
        }).state('management.userManagement.modify', {
          url: '/modify/:userId',
          templateUrl: 'app/pages/management/userManagement/userManagementModify.html',
          controller:'userManagementModifyCtrl',
          controllerAs:'modifyCtrl',
          title: '修改用户信息',
        });
    $urlRouterProvider.when('/management/userManagement','/management/userManagement/list');
  }

})();
