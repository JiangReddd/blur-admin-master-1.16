/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalOperationList')
      .controller('medalOperationListCtrl', medalOperationListCtrl);

  /** @ngInject */
  function medalOperationListCtrl($http, $q, $filter, editableOptions, editableThemes) {

    var vm = this;

        function getJson(url, target)
        {
            var deferred = $q.defer();
            $http.get(url)
            .success(function (d)
            {
                var dbody = d.body;
                console.log(dbody);
                $.each(dbody,function(i){
                        if(dbody[i].isEnable == "1"){
                          dbody[i].isEnable = "启用";
                        }
                        if(dbody[i].isEnable == "0"){
                          dbody[i].isEnable = "停用";
                        }
                        if(dbody[i].medalType == "1"){
                          dbody[i].medalType = "常规";
                        }
                        if(dbody[i].medalType == "2"){
                          dbody[i].medalType = "年度勋章";
                        }
                        if(dbody[i].medalType == "3"){
                          dbody[i].medalType = "职业生涯";
                        }
                    });
                vm[target] = dbody;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        getJson('/admin/getMedalAll', 'smartTableData').then(function ()
        //getJson('app/pages/management/medalOperationList/medalOperationList.json', 'smartTableData').then(function ()
        {
           }
        );



/*    $.each($scope.smartTableData,function(i){
        if($scope.smartTableData[i].IsEnable == "1"){
          $scope.smartTableData[i].IsEnable = "启用";
        }
        else{
          $scope.smartTableData[i].IsEnable = "停用";
        }
    });*/

  }
})();
