/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.groupTypeManagement', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.groupTypeManagement', {
          url: '/groupTypeManagement',
          abstract: true,
          templateUrl: 'app/pages/management/groupTypeManagement/groupTypeManagement.html',
          title: '班组类别管理列表',
          sidebarMeta: {
            order: 900,
          },
        }).state('management.groupTypeManagement.list', {
          url: '/list',
          templateUrl: 'app/pages/management/groupTypeManagement/groupTypeManagement1.html',
          controller:'groupTypeManagementCtrl',
          controllerAs:'managementCtrl',
          title: '班组类别管理列表',
        }).state('management.groupTypeManagement.add', {
          url: '/add',
          controller:'groupTypeManagementAddCtrl',
          controllerAs:'addCtrl',
          templateUrl: 'app/pages/management/groupTypeManagement/groupTypeManagementAdd.html',
          title: '新增班组类别',
        }).state('management.groupTypeManagement.modify', {
          url: '/modify/:groupClassId',
          templateUrl: 'app/pages/management/groupTypeManagement/groupTypeManagementModify.html',
          controller:'groupTypeManagementModifyCtrl',
          controllerAs:'modifyCtrl',
          title: '修改班组类别',
        });
    $urlRouterProvider.when('/management/groupTypeManagement','/management/groupTypeManagement/list');
  }

})();
