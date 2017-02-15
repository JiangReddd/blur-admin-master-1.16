/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.groupManagement')
      .controller('groupManagementCtrl', groupManagementCtrl);

  /** @ngInject */
  function groupManagementCtrl($http, $q, $filter, editableOptions, editableThemes) {

    var vm = this;

        function getJson(url, target)
        {
            var deferred = $q.defer();
            $http.get(url)
            .success(function (d)
            { 
                var dbody = d.body.UserGroup;
                //console.log(dbody);
                //班组类别ID转换班组类别
                $.each(dbody,function(i){
                        var dClass = d.body.GroupClass;
                        var dClassLength = d.body.GroupClass.length;
                        $.each(dClass,function(n){
                          if(dbody[i].groupClassId == dClass[n].groupClassId){
                            dbody[i].groupTypeName = dClass[n].groupClassName;
                          }
                        })
                    })
                //console.log(dbody);
                vm[target] = dbody;
                deferred.resolve();
            }
            )

            return deferred.promise;
        }


        //getJson('app/pages/management/groupManagement/groupManagement.json', 'smartTableData').then(function ()
        getJson('/admin/getUserGroupAll', 'smartTableData').then(function ()
        {

           });



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
