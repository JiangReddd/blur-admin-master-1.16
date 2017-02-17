/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.accumulation.grouprank')
		.controller('groupDetailCtrl', groupDetailCtrl);

	/** @ngInject */
	function groupDetailCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/accumulation/grouprank/grouprank.json').then(function(res) {
			var messages = res.data.body.sort(function(a, b) {
				if (a.groupId > b.groupId) return 1;
				if (a.groupId < b.groupId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.groupId == $stateParams.groupId;
			})[0];   
			console.log(vm.mail);
		});
		//vm.label = $stateParams.label;
	}
})();