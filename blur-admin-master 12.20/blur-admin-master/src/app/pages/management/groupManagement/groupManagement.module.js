/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.groupManagement', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.groupManagement', {
          url: '/groupManagement',
          abstract: true,
          templateUrl: 'app/pages/management/groupManagement/groupManagement.html',
          title: '班组信息管理列表',
          sidebarMeta: {
            order: 900,
          },
        }).state('management.groupManagement.list', {
          url: '/list',
          templateUrl: 'app/pages/management/groupManagement/groupManagement1.html',
          controller:'groupManagementCtrl',
          controllerAs:'managementCtrl',
          title: '班组信息管理列表',
        }).state('management.groupManagement.add', {
          url: '/add',
          templateUrl: 'app/pages/management/groupManagement/groupManagementAdd.html',
          title: '新增班组信息',
        }).state('management.groupManagement.modify', {
          url: '/modify/:id',
          templateUrl: 'app/pages/management/groupManagement/groupManagementModify.html',
          controller:'groupManagementDetailCtrl',
          controllerAs:'detailCtrl',
          title: '修改班组信息',
        });
    $urlRouterProvider.when('/management/groupManagement','/management/groupManagement/list');
  }

})();
