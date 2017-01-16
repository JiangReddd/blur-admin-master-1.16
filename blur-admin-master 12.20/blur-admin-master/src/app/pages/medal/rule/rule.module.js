/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rule', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('medal.rule', {
        url: '/rule',
        templateUrl: 'app/pages/medal/rule/rule.html',
          title: '勋章规则',
          controller: 'medalRuleCtrl',
          controllerAs: 'ruleCtrl',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();