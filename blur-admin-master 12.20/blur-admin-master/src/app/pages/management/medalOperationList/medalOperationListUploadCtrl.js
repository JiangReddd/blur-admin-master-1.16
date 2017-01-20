/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListUploadCtrl', medalOperationListUploadCtrl);

	/** @ngInject */
	function medalOperationListUploadCtrl($http,$stateParams) {
		var vm = this;

		$http.get('app/pages/management/medalOperationList/medalOperationList.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.medalId > b.medalId) return 1;
				if (a.medalId < b.medalId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.medalId == $stateParams.medalId;
			})[0];   
			console.log(vm.mail);
			if(vm.mail.isEnable == "1"){
				$("#isEnable").attr("checked",true);
			}
			if(vm.mail.isEnable == "0"){
				$("#isEnable1").attr("checked",true);
			}; 
			if(vm.mail.growType == "1"){
				$("#growType").attr("checked",true);
			}
			if(vm.mail.growType == "0"){
				$("#growType1").attr("checked",true);
			}; 
		});

		$("input[type=file]").change(function(){
			$(this).parents(".uploader").find(".filename").val($(this).val());
			console.log($(this).val());
			vm.imageUrl = $(this).val();
		});
		$("input[type=file]").each(function(){
			if($(this).val()==""){
				$(this).parents(".uploader").find(".filename").val("未选择上传文件");
			}
		});



		vm.submit = function(){
			var data = {};
			data.medalId = vm.mail.medalId;
			data.imageUrl = vm.imageUrl;
			console.log(data);
		}
	}
})();