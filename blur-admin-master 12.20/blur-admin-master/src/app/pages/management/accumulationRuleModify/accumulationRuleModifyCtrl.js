/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRuleModify')
      .controller('accumulationRuleModifyCtrl', accumulationRuleModifyCtrl);

  /** @ngInject */
  function accumulationRuleModifyCtrl($scope,$http, $q, $filter, editableOptions, editableThemes) {

          var vm = this;

          $http.get("/admin/getCreditRule").success(function(res){
              //console.log(res);
              vm.rule = {};
              vm.rule.id = res.body.id;
              vm.rule.ruleInfo = res.body.ruleInfo;
          });

          vm.ruleModify = function(){
              //console.log(vm.rule.ruleId);
              //console.log(vm.rule.ruleInfo);
              var data={};
              data.id = vm.rule.id;
              data.ruleInfo = vm.rule.ruleInfo;
              var url = '/admin/setCreditRule';
              console.log(data);
              console.log(url);
              $http.post(url,data)
                .success(function(response){
                          //上传成功的操作
                          console.log("success");
                          alert("积分规则修改成功");
                })
                .error(function(){
                          //console.log(data);
                          console.log("error");
                          alert("积分规则修改失败");
                });
          }



}})();
