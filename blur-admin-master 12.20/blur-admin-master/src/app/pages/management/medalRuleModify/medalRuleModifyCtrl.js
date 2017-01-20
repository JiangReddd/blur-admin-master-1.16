/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalRuleModify')
      .controller('medalRuleModifyCtrl', medalRuleModifyCtrl);

  /** @ngInject */
  function medalRuleModifyCtrl($scope,$http, $q, $filter, editableOptions, editableThemes) {

          var vm = this;

          $http.get("/admin/getMedalRule").success(function(res){
              console.log(res);
              vm.rule = {};
              vm.rule.ruleId = res.body.ruleId;
              vm.rule.ruleInfo = res.body.ruleInfo;
              console.log(res.body.ruleInfo);
              console.log(res.body.ruleId);
          });

          vm.ruleModify = function(){
              console.log(vm.rule.ruleId);
              console.log(vm.rule.ruleInfo);
              //vm.newRule = JSON.stringify(vm.rule);
              var data={};
              data.ruleId = vm.rule.ruleId;
              data.ruleInfo = vm.rule.ruleInfo;
              var url = '/admin/setMedalRule';
              console.log(data);
              console.log(url);
              $http.post(url,data)
                .success(function(response){
                          //上传成功的操作
                          console.log("success");
                })
                .error(function(){
                          //console.log(data);
                          console.log("error");
                               });
          }



}})();
