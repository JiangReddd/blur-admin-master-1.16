/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation', [
      'BlurAdmin.pages.accumulation.grouprank',
      'BlurAdmin.pages.accumulation.myAccumulation',
      'BlurAdmin.pages.accumulation.accumulationRule'

    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('accumulation', {
        url: '/accumulation',
        template: '<ui-view></ui-view>',
        abstract: true,
        title: '积分陈列馆',
        sidebarMeta: {
          icon: 'ion-stats-bars',
          order: 100,
        },
      });
  }
})();