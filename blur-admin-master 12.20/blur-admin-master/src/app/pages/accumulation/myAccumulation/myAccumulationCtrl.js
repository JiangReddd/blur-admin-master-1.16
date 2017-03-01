/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.myAccumulation')
      .controller('myAccumulationCtrl', myAccumulationCtrl);

  /** @ngInject */
  function myAccumulationCtrl($scope,$http, $q, $filter, editableOptions, editableThemes) {

          var vm = this;
          function getJson(url, target, time)
          {
              var deferred = $q.defer();
              $http.get(url)
              .success(function (d)
              {
                  
                  if(time !== null){
                    var accumulationYear = time;
                    //console.log(accumulationYear);
                  }
                  console.log(d.body);
                  console.log(d.body[accumulationYear]);
                  $.each(d.body[accumulationYear],function(i){

                        var exchangeUpdateTime = d.body[accumulationYear][i].creditTime;
                        var newDate = new Date();
                        newDate.setTime(exchangeUpdateTime);
                        //console.log(newDate.toLocaleDateString());
                        d.body[accumulationYear][i].creditTime = newDate.toLocaleDateString();

                    });
                  vm[target] = d.body[accumulationYear];
                  vm.records = d.body.years;
                  console.log(vm.records);
                  //vm.records = d.body.year;
                  deferred.resolve();
              }
              )

              return deferred.promise;
          }

          //先取第一年的作为表格数据
          $http.get("/user/getMyCreditItem").then(function(res){
          //$http.get("app/pages/accumulation/myAccumulation/myAccumulation.json").then(function(res){
            var accumulationYearFirst = res.data.body.years[0];
            console.log(accumulationYearFirst);
            getJson('/user/getMyCreditItem', 'accumulationData',accumulationYearFirst).then(function ()
            //getJson('app/pages/accumulation/myAccumulation/myAccumulation.json', 'accumulationData',accumulationYearFirst).then(function ()
            {
             
            });
          })


          /*vm.test = new Date();
          vm.test1 = vm.test.getYear() + 1901;
          console.log(vm.test1);*/

          vm.year = function(yearNum){
             //var url = "app/pages/accumulation/myAccumulation/myAccumulation.json"/* + yearNum + ".json"*/;
             var url = "/user/getMyCreditItem"/* + yearNum + ".json"*/;
             //console.log(url);
             getJson(url, 'accumulationData', yearNum);
          }

  }

})();
