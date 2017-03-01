/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  function dashboardCtrl($scope, $rootScope, fileReader, $filter, $uibModal, $http,$stateParams) {
    var vm = this;
    //$http.get("app/pages/dashboard/dashboard.json").then(function(res){
    $http.get("user/getMyMedalAndCredit").then(function(res){
    	vm.message = res.data.body;
    	$rootScope.userId = vm.message.medalInfo[0].userId;

    	console.log(vm.message);
    	console.log($rootScope.userId);
    })

  }

})();
