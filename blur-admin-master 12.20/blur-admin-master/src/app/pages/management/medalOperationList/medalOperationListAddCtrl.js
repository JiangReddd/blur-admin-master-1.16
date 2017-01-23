/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListAddCtrl', medalOperationListAddCtrl);

	/** @ngInject */
	function medalOperationListAddCtrl($http,$stateParams,$location) {
		var vm = this;
		vm.standardSelectItems = [
		      { label: '常规', value: 1 },
		      { label: '职业生涯', value: 2 },
		      { label: '年度勋章', value: 3 },
		    ];


		vm.submit = function(){
			var data = {};
			data.medalName = vm.medalName;
			//data.medalEnName = vm.medalEnName;
			data.medalInfo = vm.medalInfo;
			data.growType = $("input:checked").val();
			//data.imageUrl = vm.imageUrl;
			data.highestLevel = vm.highestLevel;
			data.priorityNum = vm.priorityNum;
			//获取勋章类型
			var medalType = vm.medalTypeOption.label;
			if(medalType == "常规"){
				data.medalType = 1;
			}
			if(medalType == "年度勋章"){
				data.medalType = 2;
			}
			if(medalType == "职业生涯"){
				data.medalType = 3;
			}
			console.log(data);
			var url = '/admin/insertMedal';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("新增勋章成功");
	                    $location.path("/management/medalOperationList/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("新增勋章失败");
	                    $location.path("/management/medalOperationList/add", {}, { reload: true });
                });
		}
	}
})();