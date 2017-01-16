/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.myAccumulation', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('accumulation.myAccumulation', {
          url: '/myAccumulation',
          templateUrl: 'app/pages/accumulation/myAccumulation/myAccumulation.html',
          controller: 'myAccumulationCtrl',
          controllerAs: 'accumulationCtrl',
          title: '我的积分',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
