/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupTypeManagement')
		.controller('groupTypeManagementModifyCtrl', groupTypeManagementModifyCtrl);

	/** @ngInject */
	function groupTypeManagementModifyCtrl($http,$stateParams,$location) {
		var vm = this;
		$http.get('app/pages/management/groupTypeManagement/groupTypeManagement.json').then(function(res) {
			var messages = res.data.body.sort(function(a, b) {
				if (a.groupClassId > b.groupClassId) return 1;
				if (a.groupClassId < b.groupClassId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.groupClassId == $stateParams.groupClassId;
			})[0]; 
		});
		
		vm.update = function(){
			var data = {};
			data.groupClassName = vm.mail.groupClassName;
			data.groupClassId = vm.mail.groupClassId;
			console.log(data);
			var url = '/admin/updateGroupClass';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("班组类别修改成功");
	                    $location.path("/management/groupTypeManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("班组类别修改失败");
	                    $location.path("/management/groupTypeManagement/modify/" + vm.mail.groupClassId, {}, { reload: true });
                });
		}
	}
})();