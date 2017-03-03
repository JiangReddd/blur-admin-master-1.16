/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.profile', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('profile', {
        url: '/profile',
        title: '个人信息',
        templateUrl: 'app/pages/profile/content.html',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 1000,
        }
        
      }).state('profile.info', {
        url: '/profile/info/:userId',
        title: '个人信息',
        templateUrl: 'app/pages/profile/profile.html',
        controller: 'ProfilePageCtrl',
        controllerAs: 'profileCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 1000,
        }
        
      }).state('profile.password', {
        url: '/profile/password',
        title: '修改密码',
        templateUrl: 'app/pages/profile/password.html',
        controller: 'ProfilePasswordCtrl',
        controllerAs: 'passwordCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 1000,
        }
        
      }).state('profile.uploadPicture', {
        url: '/profile/uploadPicture',
        title: '个人照片',
        templateUrl: 'app/pages/profile/profilePicture.html',
        controller: 'ProfilePictureCtrl',
        controllerAs: 'pictureCtrl',
        sidebarMeta: {
          icon: 'ion-android-home',
          order: 1000,
        }
        
      });
      $urlRouterProvider.when('/profile','/profile/info/yangying');

  }

})();