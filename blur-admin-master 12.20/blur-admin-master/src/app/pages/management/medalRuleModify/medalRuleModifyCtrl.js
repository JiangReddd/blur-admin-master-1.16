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
              var data = new FormData();
              data.append("ruleId",vm.rule.ruleId);
              data.append("ruleInfo",vm.rule.ruleInfo);
              console.log(data);
              $http({
                  url:'/admin/setMedalRule',
                  method: 'POST', 
                  headers:{'Content-Type':undefined},
                  data: data 
                }).success(function(){
                                        console.log("success!");
                                        console.log(vm.newRule);
                                      })
                  .error(function(){
                                      //console.log(data);
                                      console.log("error");
                                      //console.log(data);
                                   })
          }



}})();
