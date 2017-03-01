/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.medal.history')
    .controller('historyReleaseCtrl', historyReleaseCtrl);

    /** @ngInject */
    function historyReleaseCtrl($http, $q, $filter, editableOptions, editableThemes)
    {
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
                        if(dbody[i].medalType == "1"){
                          dbody[i].medalType = "常规";
                        }
                        if(dbody[i].medalType == "2"){
                          dbody[i].medalType = "职业生涯";
                        }
                        if(dbody[i].medalType == "3"){
                          dbody[i].medalType = "年度勋章";
                        }

                        var exchangeUpdateTime = dbody[i].updateTime;
                        var newDate = new Date();
                        newDate.setTime(exchangeUpdateTime);
                        //console.log(newDate.toLocaleDateString());
                        dbody[i].updateTime = newDate.toLocaleDateString();

                        if (dbody[i].medalChangeLevel > 0 ) {
                            dbody[i].medalChangeLevelIcon = true;
                        }else{
                            dbody[i].medalChangeLevelIcon = false;
                        }

                        dbody[i].medalChangeLevel = Math.abs(dbody[i].medalChangeLevel);

                    });
                vm[target] = dbody;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        //getJson('app/pages/medal/history/history.json', 'smartTableData').then(function ()
        getJson('/user/getMyMedalRecord', 'smartTableData').then(function ()
        {

           }
        );

    }

}
)();
