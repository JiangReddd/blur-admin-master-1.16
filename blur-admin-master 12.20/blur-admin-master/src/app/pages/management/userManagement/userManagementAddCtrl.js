/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.userManagement')
		.controller('userManagementAddCtrl', userManagementAddCtrl);

	/** @ngInject */
	function userManagementAddCtrl($http,$stateParams,$location) {
		var vm = this;

		$http.get('/admin/getUserGroupAll').then(function(res) {
		//$http.get('app/pages/management/groupManagement/groupManagement.json').then(function(res) {
		vm.standardSelectItems = [];
			var messages = res.data.body.UserGroup.sort(function(a, b) {
				if (a.groupId > b.groupId) return 1;
				if (a.groupId < b.groupId) return -1;
			}).reverse();
			console.log(messages);
			vm.standardSelectItems = messages; 
			console.log(vm.standardSelectItems);  
		});

		//获取用户权限选择
		//$http.get('app/pages/management/userManagement/userRole.json').then(function(res) {
		$http.get('/admin/getUserRoleAll').then(function(res) {
		vm.standardRoleSelectItems = [];
			var messages = res.data.body.sort(function(a, b) {
				if (a.roleId > b.roleId) return 1;
				if (a.roleId < b.roleId) return -1;
			}).reverse();
			console.log(messages);
			vm.standardRoleSelectItems = messages; 
			console.log(vm.standardRoleSelectItems);  
		});

		$(".col-xs-1, .col-sm-1, .col-md-1, .col-lg-1").css("padding-left","0px");

		vm.insert = function(){
			var data = {};
			data.userId = vm.mail.userId;
			data.userName = vm.mail.userName;
			data.groupId = vm.standardSelected;
			data.isInService = $("input:checked").val();
			data.workNumber = vm.mail.workNumber;
			data.takeOverNumber = vm.mail.takeOverNumber;
			data.roleId = vm.standardRoleSelected;
			console.log(data);

			var url = '/admin/insertUserInfoForAdmin';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("新增用户成功");
	                    $location.path("/management/userManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("新增用户失败");
	                    $location.path("/management/userManagement/add", {}, { reload: true });
                });
		}
	}
})();