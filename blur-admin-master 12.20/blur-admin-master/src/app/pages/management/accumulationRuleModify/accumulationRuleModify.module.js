/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRuleModify', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.accumulationRuleModify', {
          url: '/accumulationRuleModify',
          templateUrl: 'app/pages/management/accumulationRuleModify/accumulationRuleModify.html',
          title: '积分规则修改',
          controller:"accumulationRuleModifyCtrl",
          controllerAs:"ModifyCtrl",
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 400,
          },
        });
  }

})();