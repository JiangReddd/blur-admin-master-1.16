/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.accumulationRule', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('accumulation.accumulationRule', {
          url: '/accumulationRule',
          templateUrl: 'app/pages/accumulation/accumulationRule/accumulationRule.html',
          controller: 'accumulationRuleCtrl',
          controllerAs: 'ruleCtrl',
          title: '积分规则',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();