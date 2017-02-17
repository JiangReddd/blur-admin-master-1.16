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
    $rootScope.userId = "yangying";
    console.log($rootScope.userId);

  }

})();
