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

    /*$http.get('/admin/getUserInfoAll').then(function(res) {
    //$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
      var messages = res.data.body.userInfoAll.sort(function(a, b) {
        if (a.userId > b.userId) return 1;
        if (a.userId < b.userId) return -1;
      }).reverse();

      //$http.get("app/pages/dashboard/dashboard.json").then(function(res){
      $http.get("user/getMyMedalAndCredit").then(function(res){
        vm.userinfo = res.data.body;
        $rootScope.userId = vm.userinfo.medalInfo[0].userId;
        console.log($rootScope.userId);

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

      
    });*/

    $http.get('/user/getMyUserInfo').then(function(res) {
    //$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
      vm.mail = res.data.body;


      if(vm.mail.isInService == 1){
        vm.mail.isInService = "在职";
      } 
      if(vm.mail.isInService == 0){
        vm.mail.isInService = "离职";
      }   
      console.log(vm.mail);
      
    });

    vm.uploadTelephone = function(){
      var data = {};
      data.telephoneNumber = vm.mail.telephoneNumber;
      data.userId = vm.mail.userId;
      var url = "/user/updateUserInfoTelephone";
      $http.post(url,data)
              .success(function(response){
                      //上传成功的操作
                      //console.log("success");
                      alert("更改用户信息成功");
              })
              .error(function(){
                      //console.log(data);
                      //console.log("error");
                      alert("更改用户信息失败");
              });
    };

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

      /*$scope.file = {"lastModified":1484809277106,
          "lastModifiedDate":"Thu Jan 19 2017 15:01:17 GMT+0800 (中国标准时间)",
          "name":"84481_20130116142820494200_1.jpg",
          "size":137992,
          "type":"image/png",
          "webkitRelativePath":""};
      console.log($scope.file);*/
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    $scope.switches = [true, true, false, true, true, false];
  }

})();
