/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePictureCtrl', ProfilePictureCtrl);

  /** @ngInject */
  function ProfilePictureCtrl($scope, $rootScope,$http,$window,$stateParams) {

    var vm = this;

    $http.get('/admin/getUserInfoAll').then(function(res) {
    //$http.get('app/pages/management/userManagement/userManagement.json').then(function(res) {
      var messages = res.data.body.userInfoAll.sort(function(a, b) {
        if (a.userId > b.userId) return 1;
        if (a.userId < b.userId) return -1;
      }).reverse();
      console.log(messages);
      //$http.get("app/pages/dashboard/dashboard.json").then(function(res){
      $http.get("user/getMyMedalAndCredit").then(function(res){
        vm.userinfo = res.data.body;
        console.log(vm.userinfo);
        $rootScope.userId = vm.userinfo.medalInfo[0].userId;
        console.log($rootScope.userId);

        $stateParams.userId = $rootScope.userId;


        vm.mail = messages.filter(function(m) {
          return m.userId == $stateParams.userId;
        })[0]; 

        vm.pic = vm.mail.picturePath;
        console.log(vm.pic);
      });


      /*console.log(messages);
      console.log($stateParams);
      console.log(vm.mail);*/
      
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
        auth(vm.pic);
        console.log("picture path:"+vm.pic );
      }).error(function(response){
        console.log("error");
      });
    }

    $("input[type=file]").change(function(){
      $(this).parents(".uploader").find(".filename").val($(this).val());
      //console.log($(this).val());
      vm.imageUrl = $(this).val();

      vm.fileUpload();
    });
    $("input[type=file]").each(function(){
      if($(this).val()==""){
        $(this).parents(".uploader").find(".filename").val("未选择上传文件");
      }
    });



  }

})();