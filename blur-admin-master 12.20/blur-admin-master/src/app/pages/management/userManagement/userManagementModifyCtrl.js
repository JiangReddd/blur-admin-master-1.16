/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.userManagement')
		.controller('userManagementModifyCtrl', userManagementModifyCtrl);

	/** @ngInject */
	function userManagementModifyCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.userId > b.userId) return 1;
				if (a.userId < b.userId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.userId == $stateParams.userId;
			})[0];   
			if(vm.mail.isInService == "1"){
				$("#isInService").attr("checked",true);
			}
			if(vm.mail.isInService == "0"){
				$("#isInService1").attr("checked",true);
			}; 
			
		});
		vm.label = $stateParams.label;
	}
})();