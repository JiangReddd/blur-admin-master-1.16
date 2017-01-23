/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationOperationList')
      .controller('accumulationOperationListCtrl', accumulationOperationListCtrl);

  /** @ngInject */
  function accumulationOperationListCtrl($http, $q, $filter, editableOptions, editableThemes) {

        var vm = this;
        function getJson(url, target)
        {
            var deferred = $q.defer();
            $http.get(url)
            .success(function (d)
            {
                
                console.log(d.body);
                var dbody = d.body;
                $.each(dbody,function(i){
                        if(dbody[i].isEnable == "1"){
                          dbody[i].isEnable = "启用";
                        }
                        if(dbody[i].isEnable == "0"){
                          dbody[i].isEnable = "停用";
                        }

                        var exchangeUpdateTime = dbody[i].updateTime;
                        var newDate = new Date();
                        newDate.setTime(exchangeUpdateTime);
                        console.log(newDate.toLocaleDateString());
                        dbody[i].updateTime = newDate.toLocaleDateString();

                        var exchangeCreateTime = dbody[i].createTime;
                        var newDate1 = new Date();
                        newDate1.setTime(exchangeCreateTime);
                        console.log(newDate1.toLocaleDateString());
                        dbody[i].createTime = newDate1.toLocaleDateString();
                    });
                vm[target] = dbody;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        //getJson('/app/pages/management/accumulationOperationList/accumulationOperationList.json', 'smartTableData').then(function ()
        getJson('/admin/getCreditItemAll', 'smartTableData').then(function ()
        {
           }
        );

  }

})();
