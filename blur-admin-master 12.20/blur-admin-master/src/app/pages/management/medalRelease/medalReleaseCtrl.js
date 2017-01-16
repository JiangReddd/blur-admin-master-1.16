/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.management.medalRelease')
    .controller('medalReleaseCtrl', medalReleaseCtrl);

    /** @ngInject */
    function medalReleaseCtrl($http, $q, $filter, editableOptions, editableThemes)
    {
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

        vm.smartTablePageSize = 10;

        getJson('app/pages/management/medalRelease/medalRelease.json', 'smartTableData').then(function ()
        {

           }
        );

    }

}
)();
