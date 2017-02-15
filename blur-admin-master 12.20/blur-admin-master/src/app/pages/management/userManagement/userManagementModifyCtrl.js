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
			
		});

		vm.update = function(){
			var data = {};
			data.userId = vm.mail.userId;
			data.userName = vm.mail.userName;
			data.isInService = $("input:checked").val();
			data.workNumber = vm.mail.workNumber;
			data.roleId = vm.mail.roleId;
			data.groupId = vm.mail.groupId;
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