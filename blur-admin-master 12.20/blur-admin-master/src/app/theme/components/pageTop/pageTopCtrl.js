/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('pageTopCtrl', pageTopCtrl);

  /** @ngInject */
  function pageTopCtrl($window, $location, $scope, $rootScope, fileReader, $filter, $uibModal, $http,$stateParams) {
    var vm = this;

    vm.logout = function() {
		$http.post('logout', {}).success(function() {
      $window.location.href = "/login.html";
      //$location.path("/", {}, { reload: true });
		});
	}

  }

})();
