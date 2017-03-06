/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListModifyCtrl', medalOperationListModifyCtrl);

	/** @ngInject */
	function medalOperationListModifyCtrl($http,$stateParams,$location) {
		var vm = this;

		vm.standardSelectItems = [
		      { label: '常规', value: 1 },
		      { label: '职业生涯', value: 2 },
		      { label: '年度勋章', value: 3 },
		    ];

		//$http.get('app/pages/management/medalOperationList/medalOperationList.json').then(function(res) {
		$http.get('/admin/getMedalAll').then(function(res) {
			var messages = res.data.body.sort(function(a, b) {
				if (a.medalId > b.medalId) return 1;
				if (a.medalId < b.medalId) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.medalId == $stateParams.medalId;
			})[0];   

			var medalType = vm.mail.medalType;
			vm.pic = vm.mail.imageUrl;
			//console.log(medalType);
			if(medalType == "常规"){
				$(".selectpicker option:eq(0)").attr("selected",true);
			}
			if(medalType == "年度勋章"){
				$(".selectpicker option:eq(1)").attr("selected",true);
			}
			if(medalType == "职业生涯"){
				$(".selectpicker option:eq(2)").attr("selected",true);
			}
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

		$(".filename").change(function(){
	      $(this).parents(".uploader").find(".filename").val($(this).val());
	      //console.log($(this).val());
	      vm.imageUrl = $(this).val();

	      vm.fileUpload();
	    });
	    $(".filename").each(function(){
	      if($(this).val()==""){
	        $(this).parents(".uploader").find(".filename").val("未选择上传文件");
	      }
	    });

	    vm.fileUpload = function() {
	      //var url="http://jiqun.nj-itc.com.cn:8082/upload/uploadPicture";
	      var url='/user/uploadPicture';
	      var data = new FormData();
	      var file = document.querySelector('input[type=file]').files[0];
	      data.append("file",file);
	      console.log(file);
	      console.log(data);
	      $http({
	        method:"POST",
	        url:url,
	        data:data,
	        headers: {'Content-Type':undefined},
	      }).success( function ( response )
	      {
	        //上传成功的操作
	        console.log("upload success");
	        vm.pic = response.body;
	        //console.log("picture path:"+vm.pic );
	        
	      }).error(function(response){
	        console.log("图片上传失败");
	      });
	    }

		vm.submit = function(){
			var data = {};
			data.medalId = vm.mail.medalId;
			data.medalName = vm.mail.medalName;
			data.medalInfo = vm.mail.medalInfo;
			data.imageUrl = vm.pc;
			//data.medalEnName = vm.mail.medalEnName;
			data.growType = $("input[name='growType']:checked").val();
			data.highestLevel = vm.mail.highestLevel;
			data.priorityNum = vm.mail.priorityNum;
			data.isEnable = $("input[name='isEnable']:checked").val();
			//获取勋章类型
			if($(".selectpicker option:selected").val() == "常规"){
				data.medalType = 1;
			}
			if($(".selectpicker option:selected").val() == "年度勋章"){
				data.medalType = 2;
			}
			if($(".selectpicker option:selected").val() == "职业生涯"){
				data.medalType = 3;
			}
			//data.medalType = $(".selectpicker option:selected").val();
			console.log(data);

			var url = '/admin/updateMedal';
            $http.post(url,data)
                .success(function(response){
                        //上传成功的操作
                        console.log("success");
                        alert("勋章修改成功");
	                    $location.path("/management/medalOperationList/list", {}, { reload: true });
                })
                .error(function(){
                        //console.log(data);
                        console.log("error");
                        alert("勋章修改失败");
	                    $location.path("/management/medalOperationList/modify/" + vm.mail.medalId, {}, { reload: true });
                });
		}
	}
})();