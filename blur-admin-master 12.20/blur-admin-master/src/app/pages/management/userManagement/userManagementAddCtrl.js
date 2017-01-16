/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.userManagement')
		.controller('userManagementAddCtrl', userManagementAddCtrl);

	/** @ngInject */
	function userManagementAddCtrl($http,$stateParams) {
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
	}
})();