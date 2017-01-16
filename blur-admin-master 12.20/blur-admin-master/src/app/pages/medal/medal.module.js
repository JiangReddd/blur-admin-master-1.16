/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.medal', [
      'BlurAdmin.pages.medal.rank',
      'BlurAdmin.pages.medal.mymedal',
      'BlurAdmin.pages.medal.history',
      'BlurAdmin.pages.medal.rule'
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('medal', {
        url: '/medal',
        template: '<ui-view></ui-view>',
        abstract: true,
        title: '勋章陈列馆',
        sidebarMeta: {
          icon: 'ion-gear-a',
          order: 100,
        },
      });
  }
})();