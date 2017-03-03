/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePasswordCtrl', ProfilePasswordCtrl);

  /** @ngInject */
  function ProfilePasswordCtrl($scope, $rootScope, fileReader, $filter, $uibModal, $http,$stateParams) {
    var vm = this;

/*    $http.get('/admin/getUserInfoAll').then(function(res) {
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
      });



      
    });*/


    $http.get('/user/getMyUserInfo').then(function(res) {
    //$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
      vm.mail = res.data.body;

      console.log(vm.mail);
      
    });


    vm.update = function(){
      var data = {};
      data.password = vm.mail.newPassword;
      var url = "/user/updatePassword";


      if(vm.mail.newPassword == vm.mail.confirmNewPassword){
        //alert("确认密码一致");
      }else{
        alert("确认密码与新密码不一致");
        return false
      };

      if(vm.mail.oldPassword == vm.mail.password){
        //alert("确认密码一致");
      }else{
        alert("旧密码不正确");
        return false
      };

      $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        //console.log("success");
                        alert("更改用户密码信息成功");
                })
                .error(function(){
                        //console.log(data);
                        //console.log("error");
                        alert("更改用户密码信息失败");
                });
    }

  }

})();
