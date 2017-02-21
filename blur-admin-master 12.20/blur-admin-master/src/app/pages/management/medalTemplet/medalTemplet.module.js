/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalTemplet', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.medalTemplet', {
          url: '/medalTemplet',
          templateUrl: 'app/pages/management/medalTemplet/medalTemplet.html',
          title: '勋章模板上传',
          controller:"medalTempletCtrl",
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 300,
          },
        });
  }

})();