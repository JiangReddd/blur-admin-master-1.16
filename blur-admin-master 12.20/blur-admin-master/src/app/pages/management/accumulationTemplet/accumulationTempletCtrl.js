/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationTemplet')
      .controller('accumulationTempletCtrl', accumulationTempletCtrl);

  /** @ngInject */
  function accumulationTempletCtrl($scope, $timeout,$http,$window) {
  	  	$scope.uploadAccumulation = function(){
  		var data = new FormData();
        var file = document.querySelector('input[type=file]').files[0];
        //var file2 = $scope.myFile;
        console.log(file);
        //console.log(file2);
        data.append('file', file);
        var url = "/admin/uploadCreditFile"; 

        $http({
              method:'POST',
              url: url,
              data: data,
              headers: {'Content-Type':undefined},
               })   
              .success( function(response)
                       {
                       		//上传成功的操作
                       		console.log("上传成功");
                       })
              .error(function(response){
              				console.log("上传失败");
              				alert("上传失败");
              })
  		/*$http.post(url,data)
  		.success(function(res){

  		})
  		.error(function(res){

  		})*/
  	}

  	$scope.downloadFile = function(){
  		$window.location = "/admin/downloadCreditModel";
  	}

    $scope.progressFunction = function() {
      return $timeout(function() {}, 300);
    };
  }

})();
