/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.accumulationOperationList')
		.controller('accumulationOperationListAddCtrl', accumulationOperationListAddCtrl);

	/** @ngInject */
	function accumulationOperationListAddCtrl($http,$stateParams,$location) {
		var vm = this;
		vm.submit = function(){
			var data={};
	        data.creditItemName = vm.creditItemName;
	        var url = '/admin/insertCreditItem';
	        console.log(data);
	        console.log(url);
	        $http.post(url,data)
	            .success(function(response){
	                    //上传成功的操作
	                    //console.log("success");
                        alert("新增成功");
	                    $location.path("/management/accumulationOperationList/list", {}, { reload: true });
	            })
	            .error(function(){
	                    //console.log(data);
	                    //console.log("error");
                        alert("新增失败");
	                    $location.path("/management/accumulationOperationList/add", {}, { reload: true });
	            });
		}
	}
})();