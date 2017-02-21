/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.userManagement')
		.controller('userManagementModifyCtrl', userManagementModifyCtrl);

	/** @ngInject */
	function userManagementModifyCtrl($http,$stateParams,$location) {
		var vm = this;
		//$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
		$http.get('/admin/getUserInfoAll').then(function(res) {
			var messages = res.data.body.userInfoAll.sort(function(a, b) {
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
			//console.log(vm.mail.groupId); 
			//console.log(vm.mail.roleId); 

			//获取用户组别选择
			$http.get('/admin/getUserGroupAll').then(function(res) {
			//$http.get('app/pages/management/groupManagement/groupManagement.json').then(function(res) {
			vm.standardSelectItems = [];
				var messages = res.data.body.UserGroup.sort(function(a, b) {
					if (a.groupId > b.groupId) return 1;
					if (a.groupId < b.groupId) return -1;
				}).reverse();
				vm.standardSelectItems = messages; 
				console.log(vm.standardSelectItems);  
				
				$.each(vm.standardSelectItems,function(i){
					if(vm.mail.groupId == vm.standardSelectItems[i].groupId){
						//$(".selectpicker option:eq(0)").attr("ng-selected",true);
						//console.log(vm.mail.groupId);
						//console.log(vm.standardSelectItems[i].groupName);


						vm.standardSelected = vm.standardSelectItems[i].groupId;


						console.log(vm.standardSelected);
						//$(".selectpicker").val(vm.standardSelectItems[i].groupClassName);
						//$(".selectpicker option:eq(1)").attr("ng-selected",true);
					} 
				})
			});
			
			//获取用户权限选择
			//$http.get('app/pages/management/userManagement/userRole.json').then(function(res) {
			$http.get('/admin/getUserRoleAll').then(function(res) {
			vm.standardRoleSelectItems = [];
				var messages = res.data.body.sort(function(a, b) {
					if (a.roleId > b.roleId) return 1;
					if (a.roleId < b.roleId) return -1;
				}).reverse();
				vm.standardRoleSelectItems = messages; 
				console.log(vm.standardRoleSelectItems);
				$.each(vm.standardRoleSelectItems,function(i){
					if(vm.mail.roleId == vm.standardRoleSelectItems[i].roleId){
						//$(".selectpicker option:eq(0)").attr("ng-selected",true);
						//console.log(vm.mail.roleId);
						//console.log(vm.standardRoleSelectItems[i].groupName);


						vm.standardRoleSelected = vm.standardRoleSelectItems[i].roleId;


						console.log(vm.standardRoleSelected);
						//$(".selectpicker").val(vm.standardSelectItems[i].groupClassName);
						//$(".selectpicker option:eq(1)").attr("ng-selected",true);
					}});  
			}); 
			
		});




		vm.update = function(){
			var data = {};
			data.userId = vm.mail.userId;
			data.userName = vm.mail.userName;
			data.isInService = $("input:checked").val();
			data.workNumber = vm.mail.workNumber;
			data.roleId = vm.standardRoleSelected;
			data.groupId = vm.standardSelected;
			console.log(data);

			var url = '/admin/updateUserInfoForAdmin';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("修改用户成功");
	                    $location.path("/management/userManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("修改用户失败");
	                    $location.path("/management/userManagement/modify/" + vm.mail.userId, {}, { reload: true });
                });
		}
	}
})();