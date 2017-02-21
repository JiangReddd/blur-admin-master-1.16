/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupManagement')
		.controller('groupManagementAddCtrl', groupManagementAddCtrl);

	/** @ngInject */
	function groupManagementAddCtrl($http,$stateParams,$scope,$location) {

		var vm = this;
		$http.get('/admin/getUserGroupAll').then(function(res) {
		//$http.get('app/pages/management/groupManagement/groupManagement.json').then(function(res) {
		vm.standardSelectItems = [];
			var messages = res.data.body.GroupClass.sort(function(a, b) {
				if (a.groupClassId > b.groupClassId) return 1;
				if (a.groupClassId < b.groupClassId) return -1;
			}).reverse();
			console.log(messages);
			vm.standardSelectItems = messages; 
		});

		vm.insert = function(){
			var data = {}
			data.groupClassId = vm.standardSelected.groupClassId;
			data.groupName = vm.groupName;
			//console.log(data);
			var url = '/admin/insertUserGroup';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("班组新增成功");
	                    $location.path("/management/groupManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("班组新增失败");
	                    $location.path("/management/groupManagement/add", {}, { reload: true });
                });
		}

		  
	}
})();