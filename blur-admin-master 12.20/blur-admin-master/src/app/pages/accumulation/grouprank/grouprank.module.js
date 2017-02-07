/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.grouprank', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('accumulation.grouprank', {
          url: '/grouprank',
          templateUrl: 'app/pages/accumulation/grouprank/grouprank.html',
          title: '班组排行',
          controller: "groupRankTabCtrl",
          controllerAs: "tabCtrl",
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        }).state('accumulation.grouprank.groupAll', {
          url: '/groupAll',
          templateUrl: 'app/pages/accumulation/grouprank/groupAll/groupAll.html',
          title: '班组排行榜 - 全部班组排行榜',
          controller: "groupAllCtrl",
          controllerAs: "allListCtrl"
        }).state('accumulation.grouprank.label', {
          url: '/inbox',
          templateUrl: 'app/pages/accumulation/grouprank/groupPart/groupPart.html',
          title: '班组排行榜 - 室班组排行榜',
          controller: "groupPartCtrl",
          controllerAs: "listCtrl",
        }).state('accumulation.grouprank.detail', {
          url: '/inbox/:id',
          templateUrl: 'app/pages/accumulation/grouprank/groupDetail/groupDetail.html',
          title: '综合排行榜 - 个人信息',
          controller: "groupDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/accumulation/grouprank','/accumulation/grouprank/inbox');
  }

})();
