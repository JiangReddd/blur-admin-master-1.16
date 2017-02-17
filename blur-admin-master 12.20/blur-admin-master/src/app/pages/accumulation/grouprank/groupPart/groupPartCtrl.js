/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.accumulation.grouprank')
		.controller('groupPartCtrl', groupPartCtrl);

	/** @ngInject */
	function groupPartCtrl($scope,$stateParams,$http) {
		var vm = this;
		$http.get('app/pages/accumulation/grouprank/grouprank.json').then(function(res) {
			console.log(res.data.body);
			var messages = res.data.body/*.sort(function(a, b) {
				if (a.groupId > b.groupId) return 1;
				if (a.groupId < b.groupId) return -1;
			}).reverse()*/;
			vm.messages = messages;
			// vm.getMessageById = function(id) {
			//   return messages.filter(function(m) {
			//     return m.id == id;
			//   })[0];
			// };
			//     
			//vm.label = $stateParams.label;
		});
	}
})();