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
                  //vm.records = d.body.year;
                  deferred.resolve();
              }
              )

              return deferred.promise;
          }

          vm.getTime = new Date();
          var accumulationYearNow = String(vm.getTime.getYear() + 1900);
          //console.log(accumulationYearNow);
          //getJson('/admin/getCreditById', 'accumulationData').then(function ()
          getJson('app/pages/accumulation/myAccumulation/myAccumulation.json', 'accumulationData',accumulationYearNow).then(function ()
          {
           
          });

          /*vm.test = new Date();
          vm.test1 = vm.test.getYear() + 1901;
          console.log(vm.test1);*/

          vm.year = function(yearNum){
             var url = "app/pages/accumulation/myAccumulation/myAccumulation.json"/* + yearNum + ".json"*/;
             //console.log(url);
             getJson(url, 'accumulationData', yearNum);
          }

  }

})();
