/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('pageTopCtrl', pageTopCtrl);

  /** @ngInject */
  function pageTopCtrl($scope, $rootScope, fileReader, $filter, $uibModal, $http,$stateParams) {
    var vm = this;

    vm.logout = function() {
		$http.post('logout', {}).finally(function() {
			$location.path("/");
		});
	}

  }

})();
