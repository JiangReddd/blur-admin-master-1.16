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

      console.log(messages);
      console.log($stateParams);
      console.log(vm.mail);
      
    });

    vm.update = function(){
      var data = {};
      data.password = vm.mail.password;
      data.confirmPassword = vm.mail.confirmPassword;
      console.log(data);

      if(data.password == data.confirmPassword){
        //alert("确认密码一致");
      }else{
        alert("确认密码不一致");
        return false
      }
    }

  }

})();
