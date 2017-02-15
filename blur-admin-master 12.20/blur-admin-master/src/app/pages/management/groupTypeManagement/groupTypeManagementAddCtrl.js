/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupTypeManagement')
		.controller('groupTypeManagementAddCtrl', groupTypeManagementAddCtrl);

	/** @ngInject */
	function groupTypeManagementAddCtrl($http,$stateParams,$location) {
		var vm = this;

		vm.insert = function(){
			var data = {};
			data.groupClassName = vm.groupClassName;
			console.log(data);
			var url = '/admin/insertGroupClass';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("新增班组类别成功");
	                    $location.path("/management/groupTypeManagement/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("新增班组类别失败");
	                    $location.path("/management/groupTypeManagement/add", {}, { reload: true });
                });
		} 
	}
})();