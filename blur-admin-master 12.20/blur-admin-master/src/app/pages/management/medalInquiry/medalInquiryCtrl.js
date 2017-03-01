/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.management.medalInquiry')
    .controller('medalInquiryCtrl', medalInquiryCtrl);

    /** @ngInject */
    function medalInquiryCtrl($http, $q, $filter, editableOptions, editableThemes)
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
                        /*if(dbody[i].medalType == "1"){
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
                        console.log(newDate.toLocaleDateString());
                        dbody[i].updateTime = newDate.toLocaleDateString();*/

                        dbody[i].medalSummary = dbody[i].professionMedalSummary + dbody[i].normalMedalSummary;

                    });
                vm[target] = dbody;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        //getJson('app/pages/management/medalInquiry/medalInquiry.json', 'smartTableData').then(function ()
        getJson('/admin/getMedalInfoSummary', 'smartTableData').then(function ()
        {

           }
        );

    }

}
)();
