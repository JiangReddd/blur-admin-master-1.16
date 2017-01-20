/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.accumulationOperationList')
		.controller('accumulationOperationListModifyCtrl', accumulationOperationListModifyCtrl);

	/** @ngInject */
	function accumulationOperationListModifyCtrl($http,$stateParams,$location) {
		var vm = this;
		$http.get('/admin/getCreditItemAll').then(function(res) {
		//$http.get('/app/pages/management/accumulationOperationList/accumulationOperationList.json').then(function(res) {
			console.log(res.data.body);
			var messages = res.data.body.sort(function(a, b) {
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
		});

		vm.update = function(){
			//console.log(vm.mail.creditItemName);
			//console.log(vm.mail.id);
			var data = {};
			data.id = vm.mail.id;
			data.creditItemName = vm.mail.creditItemName;
			data.isEnable = $("input:checked").val();
			
			//data.isEnable = ;
			console.log(data);
			var url = '/admin/updateCreditItem';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("保存成功");
	                    $location.path("/management/accumulationOperationList/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("保存失败");
	                    $location.path("/management/accumulationOperationList/modify/" + vm.mail.id, {}, { reload: true });
                });
          
		};
		vm.label = $stateParams.label;
	}
})();