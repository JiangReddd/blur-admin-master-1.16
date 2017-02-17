/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, $rootScope, fileReader, $filter, $uibModal, $http,$stateParams) {
    var vm = this;

    //$http.get('/admin/getUserInfoAll').then(function(res) {
    $http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
      var messages = res.data.body.userInfoAll.sort(function(a, b) {
        if (a.userId > b.userId) return 1;
        if (a.userId < b.userId) return -1;
      }).reverse();
      $rootScope.userId = "yangying";
      $stateParams.userId = $rootScope.userId;

      vm.mail = messages.filter(function(m) {
        return m.userId == $stateParams.userId;
      })[0]; 

      if(vm.mail.isInService == 1){
        vm.mail.isInService = "在职";
      } 
      if(vm.mail.isInService == 0){
        vm.mail.isInService = "离职";
      }   
      console.log(messages);
      console.log($stateParams);
      console.log(vm.mail);
      
    });

    $scope.picture = $filter('profilePicture')('nick');

    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    $scope.socialProfiles = [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/akveo/',
        icon: 'socicon-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/akveo_inc',
        icon: 'socicon-twitter'
      },
      {
        name: 'Google',
        icon: 'socicon-google'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/akveo',
        icon: 'socicon-linkedin'
      },
      {
        name: 'GitHub',
        href: 'https://github.com/akveo',
        icon: 'socicon-github'
      },
      {
        name: 'StackOverflow',
        icon: 'socicon-stackoverflow'
      },
      {
        name: 'Dribbble',
        icon: 'socicon-dribble'
      },
      {
        name: 'Behance',
        icon: 'socicon-behace'
      }
    ];

    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    };

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    $scope.switches = [true, true, false, true, true, false];
  }

})();
