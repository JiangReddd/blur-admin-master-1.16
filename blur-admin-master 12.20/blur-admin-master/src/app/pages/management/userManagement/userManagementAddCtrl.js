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

		$("input[type=file]").change(function(){
			$(this).parents(".uploader").find(".filename").val($(this).val());
			console.log("1");
			console.log($(this).val());
		});
		$("input[type=file]").each(function(){
			if($(this).val()==""){
				$(this).parents(".uploader").find(".filename").val("未选择上传文件");
			}
  
		});
		$(".col-xs-1, .col-sm-1, .col-md-1, .col-lg-1").css("padding-left","0px");

		vm.insert = function(){
			var data = {};
			data.userId = vm.mail.userId;
			data.userName = vm.mail.userName;
			data.isInService = $("input:checked").val();
			data.workNumber = vm.mail.workNumber;
			data.takeOverNumber = vm.mail.takeOverNumber;
			data.telephoneNumber = vm.mail.telephoneNumber;
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