/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.medal.rank')
		.controller('rankListCtrl', rankListCtrl);

	/** @ngInject */
	function rankListCtrl($scope,$stateParams,$http) {
		var vm = this;
		//$http.get('app/pages/medal/rank/rank.json').then(function(res) {
		$http.get('/user/getMedalInfoUserSummaryChars').then(function(res) {
			var messages = res.data.body.sort(function(a, b) {
				if (a.updateTime > b.updateTime) return 1;
				if (a.updateTime < b.updateTime) return -1;
			}).reverse();
			vm.messages = messages;
			// vm.getMessageById = function(id) {
			//   return messages.filter(function(m) {
			//     return m.id == id;
			//   })[0];
			// };
			//     
		});
	}
})();