/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.groupTypeManagement')
      .controller('groupTypeManagementCtrl', groupTypeManagementCtrl);

  /** @ngInject */
  function groupTypeManagementCtrl($http, $q, $filter, editableOptions, editableThemes) {

    var vm = this;

        function getJson(url, target)
        {
            var deferred = $q.defer();
            $http.get(url)
            .success(function (d)
            {
                console.log(d.body);
                vm[target] = d.body;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        getJson('/admin/getGroupClassAll', 'smartTableData').then(function ()
        //getJson('app/pages/management/groupTypeManagement/groupTypeManagement.json', 'smartTableData').then(function ()
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
