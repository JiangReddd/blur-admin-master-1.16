/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('medal.rank', {
          url: '/rank',
          abstract: true,
          templateUrl: 'app/pages/medal/rank/rank.html',
          controller: "rankTabCtrl",
          controllerAs: "tabCtrl",
          title: '综合排行榜',
          sidebarMeta: {
            order: 0,
          },
        }).state('medal.rank.rankMonth', {
          url: '/rankMonth',
          template: '<rank-month></rank-month>',
          title: '综合排行榜 - 月排行榜',
          controller: "rankMonthCtrl",
          controllerAs: "rankMonth"
        }).state('medal.rank.rankSingle', {
          url: '/rankSingle',
          template: '<rank-single></rank-single>',
          title: '综合排行榜 - 常规单项榜',
          controller: "rankSingleCtrl",
          controllerAs: "rankSingle"
        }).state('medal.rank.rankSingleYear', {
          url: '/rankSingleYear',
          template: '<rank-single-year></rank-single-year>',
          title: '综合排行榜 - 年度单项榜',
          controller: "rankSingleYearCtrl",
          controllerAs: "rankSingleYear"
        }).state('medal.rank.inbox', {
          url: '/inbox',
          templateUrl: 'app/pages/medal/rank/list/rankList.html',
          title: '综合排行榜 - 个人排行榜',
          controller: "rankListCtrl",
          controllerAs: "listCtrl"
        }).state('medal.rank.detail', {
          url: '/inbox/:userId',
          templateUrl: 'app/pages/medal/rank/detail/rankDetail.html',
          title: '综合排行榜 - 个人信息',
          controller: "rankDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/medal/rank','/medal/rank/inbox');
  }

})();
