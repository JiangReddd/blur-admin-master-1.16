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
			var messages = res.data.sort(function(a, b) {
				if (a.date > b.date) return 1;
				if (a.date < b.date) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.id == $stateParams.id;
			})[0];   
		});
		vm.label = $stateParams.label;
	}
})();