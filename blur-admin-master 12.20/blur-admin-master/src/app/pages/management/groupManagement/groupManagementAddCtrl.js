/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.groupManagement')
		.controller('groupManagementAddCtrl', groupManagementAddCtrl);

	/** @ngInject */
	function groupManagementAddCtrl($http,$stateParams) {
		var vm = this;
		vm.standardSelectItems = [
		      { label: '常规', value: 1 },
		      { label: '职业生涯', value: 2 },
		      { label: '年度勋章', value: 3 },
		    ];

		  $("input[type=file]").change(function(){$(this).parents(".uploader").find(".filename").val($(this).val());});
		  $("input[type=file]").each(function(){
		  if($(this).val()==""){$(this).parents(".uploader").find(".filename").val("未选择上传文件");}
  
});
	}
})();