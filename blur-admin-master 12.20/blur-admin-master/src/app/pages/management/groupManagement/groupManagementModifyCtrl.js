/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupManagement')
		.controller('groupManagementModifyCtrl', groupManagementModifyCtrl);

	/** @ngInject */
	function groupManagementModifyCtrl($http,$stateParams,$location) {
		var vm = this;
		//$http.get('app/pages/management/groupManagement/groupManagement.json').then(function(res) {
		$http.get('/admin/getUserGroupAll').then(function(res) {
			var messages = res.data.body.UserGroup.sort(function(a, b) {
				if (a.groupId > b.groupId) return 1;
				if (a.groupId < b.groupId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.groupId == $stateParams.groupId;
			})[0]; 
			vm.standardSelectItems = res.data.body.GroupClass; 
			console.log(vm.standardSelectItems);  
			console.log(vm.mail.groupClassId); 
			
			$.each(vm.standardSelectItems,function(i){
				if(vm.mail.groupClassId == vm.standardSelectItems[i].groupClassId){
					//$(".selectpicker option:eq(0)").attr("ng-selected",true);
					//vm.standardSelected = "object:150";
					console.log(vm.mail.groupClassId);
					console.log(vm.standardSelectItems[i].groupClassName);


					vm.standardSelected = vm.standardSelectItems[i].groupClassId;


					console.log(vm.standardSelected);
					//$(".selectpicker").val(vm.standardSelectItems[i].groupClassName);
					//$(".selectpicker option:eq(1)").attr("ng-selected",true);
				} 
			})
			/*$http.get('app/pages/management/groupTypeManagement/groupTypeManagement.json').then(function(res) {
				vm.standardSelectItems = [];
					var messages = res.data.body.sort(function(a, b) {
						if (a.groupClassId > b.groupClassId) return 1;
						if (a.groupClassId < b.groupClassId) return -1;
					}).reverse();
					console.log(messages);
					vm.standardSelectItems = messages; 
				});*/
		});

		vm.update = function(){
			var data = {};
			data.groupId = vm.mail.groupId;
			data.groupName = vm.mail.groupName;
			data.groupClassId = vm.standardSelected;
			console.log(data);
			var url = '/admin/updateUserGroup';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("班组类别修改成功");
	                    $location.path("/management/groupManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("班组类别修改失败");
	                    $location.path("/management/groupManagement/modify/" + vm.mail.groupId, {}, { reload: true });
                });
		}
	}
})();