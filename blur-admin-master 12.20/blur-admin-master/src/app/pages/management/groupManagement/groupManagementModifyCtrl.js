/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupManagement')
		.controller('groupManagementDetailCtrl', groupManagementDetailCtrl);

	/** @ngInject */
	function groupManagementDetailCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/management/groupManagement/groupManagement.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.id > b.id) return 1;
				if (a.id < b.id) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.id == $stateParams.id;
			})[0];   
			if(vm.mail.isEnable == "1"){
				$("#isEnable").attr("checked",true);
			}
			if(vm.mail.isEnable == "0"){
				$("#isEnable1").attr("checked",true);
			}; 
			if(vm.mail.growType == "1"){
				$("#growType").attr("checked",true);
			}
			if(vm.mail.growType == "0"){
				$("#growType1").attr("checked",true);
			}; 
		});
		vm.label = $stateParams.label;
	}
})();