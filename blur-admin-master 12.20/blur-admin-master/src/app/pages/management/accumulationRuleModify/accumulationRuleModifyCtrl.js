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

          $http.get("/admin/getMedalRule").success(function(res){
              //console.log(res);
              vm.rule = {};
              vm.rule.ruleId = res.body.ruleId;
              vm.rule.ruleInfo = res.body.ruleInfo;
          });

          vm.ruleModify = function(){
              //console.log(vm.rule.ruleId);
              //console.log(vm.rule.ruleInfo);
              var data = new FormData();
              data.append("ruleId",vm.rule.ruleId);
              data.append("ruleInfo",vm.rule.ruleInfo);
              $http({
                  url:'/admin/setMedalRule',
                  method: 'POST', 
                  headers:{'Content-Type':undefined},
                  data: data 
                }).success(function(){
                                        console.log("success!");
                                        //console.log(vm.newRule);
                                      })
                  .error(function(){
                                      console.log("error");
                                   })
          }



}})();
