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

          function getJson(url, target)
          {
              var deferred = $q.defer();
              $http.get(url)
              .success(function (d)
              {
                  console.log(d);

                  vm[target] = d;

                  deferred.resolve();
              }
              )

              return deferred.promise;
          }

          
          getJson('app/pages/accumulation/myAccumulation/myAccumulation2017.json', 'accumulationData').then(function ()
          {
           
          });

          vm.test = new Date();
          vm.test1 = vm.test.getYear() + 1901;
          console.log(vm.test1);

          vm.year = function(yearNum){
             var url = "app/pages/accumulation/myAccumulation/myAccumulation" + yearNum + ".json";
             //console.log(url);
             getJson(url, 'accumulationData2');
          }

  }

})();
