/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.medal.rank')
		.controller('rankDetailCtrl', rankDetailCtrl);

	/** @ngInject */
	function rankDetailCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/medal/rank/rank.json').then(function(res) {
			var messages = res.data.body.sort(function(a, b) {
				if (a.updateTime > b.updateTime) return 1;
				if (a.updateTime < b.updateTime) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.userId == $stateParams.userId;
			})[0];   
		});
	}
})();