/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationOperationList', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.accumulationOperationList', {
          url: '/accumulationOperationList',
          abstract: true,
          templateUrl: 'app/pages/management/accumulationOperationList/accumulationOperationList.html',
          title: '积分操作列表',
          sidebarMeta: {
            order: 600,
          },
        }).state('management.accumulationOperationList.list', {
          url: '/list',
          templateUrl: 'app/pages/management/accumulationOperationList/accumulationOperationList1.html',
          controller:'accumulationOperationListCtrl',
          controllerAs:'OperationListCtrl',
          title: '积分列表',
        }).state('management.accumulationOperationList.add', {
          url: '/add',
          templateUrl: 'app/pages/management/accumulationOperationList/accumulationOperationListAdd.html',
          title: '积分信息新增',
        }).state('management.accumulationOperationList.modify', {
          url: '/modify/:id',
          templateUrl: 'app/pages/management/accumulationOperationList/accumulationOperationListModify.html',
          controller:'accumulationOperationListDetailCtrl',
          controllerAs:'detailCtrl',
          title: '积分信息修改',
        });
    $urlRouterProvider.when('/management/accumulationOperationList','/management/accumulationOperationList/list');
  }

})();
