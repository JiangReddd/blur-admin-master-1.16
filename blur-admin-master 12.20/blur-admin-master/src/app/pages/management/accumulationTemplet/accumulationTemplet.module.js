/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationTemplet', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.accumulationTemplet', {
          url: '/accumulationTemplet',
          templateUrl: 'app/pages/management/accumulationTemplet/accumulationTemplet.html',
          title: '积分模板上传',
          controller:"accumulationTempletCtrl",
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 700,
          },
        });
  }

})();