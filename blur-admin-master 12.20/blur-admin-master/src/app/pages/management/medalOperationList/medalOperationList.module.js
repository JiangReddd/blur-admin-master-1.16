/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalOperationList', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.medalOperationList', {
          url: '/medalOperationList',
          abstract: true,
          templateUrl: 'app/pages/management/medalOperationList/medalOperationList.html',
          title: '勋章操作列表',
          sidebarMeta: {
            order: 200,
          },
        }).state('management.medalOperationList.list', {
          url: '/list',
          templateUrl: 'app/pages/management/medalOperationList/medalOperationList1.html',
          controller:'medalOperationListCtrl',
          controllerAs:'OperationListCtrl',
          title: '勋章列表',
        }).state('management.medalOperationList.add', {
          url: '/add',
          templateUrl: 'app/pages/management/medalOperationList/medalOperationListAdd.html',
          title: '勋章信息新增',
        }).state('management.medalOperationList.modify', {
          url: '/modify/:id',
          templateUrl: 'app/pages/management/medalOperationList/medalOperationListModify.html',
          controller:'medalOperationListDetailCtrl',
          controllerAs:'detailCtrl',
          title: '勋章信息修改',
        });
    $urlRouterProvider.when('/management/medalOperationList','/management/medalOperationList/list');
  }

})();
