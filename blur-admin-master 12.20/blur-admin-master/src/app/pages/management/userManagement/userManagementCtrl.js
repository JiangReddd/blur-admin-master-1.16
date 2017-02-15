/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.userManagement')
      .controller('userManagementCtrl', userManagementCtrl);

  /** @ngInject */
  function userManagementCtrl($http, $q, $filter, editableOptions, editableThemes) {

    var vm = this;

        function getJson(url, target)
        {
            var deferred = $q.defer();
            $http.get(url)
            .success(function (d)
            {
                var userInfo = d.body.userInfoAll;
                console.log(userInfo);
                $.each(userInfo,function(i){
                        if(userInfo[i].isInService == "1"){
                          userInfo[i].isInService = "在职";
                        }
                        if(userInfo[i].isInService == "0"){
                          userInfo[i].isInService = "离职";
                        }
                    });
                vm[target] = d.body.userInfoAll;

                deferred.resolve();
            }
            )

            return deferred.promise;
        }

        vm.smartTablePageSize = 10;

        //getJson('app/pages/management/userManagement/userManagement.json', 'smartTableData').then(function ()
        getJson('/admin/getUserInfoAll', 'smartTableData').then(function ()
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
