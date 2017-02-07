/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationRelease')
      .controller('accumulationReleaseCtrl', accumulationReleaseCtrl);

  /** @ngInject */
  function accumulationReleaseCtrl($http, $q, $filter, editableOptions, editableThemes) {

      var vm = this;

              function getJson(url, target)
              {
                  var deferred = $q.defer();
                  $http.get(url)
                  .success(function (d)
                  {
                      console.log(d.body);
                      $.each(d.body,function(i){
                        var newDate = new Date();
                        var exchangecreateTime = d.body[i].createTime;
                        d.body[i].createTime = newDate.toLocaleDateString(newDate.setTime(exchangecreateTime));
                        console.log(d.body[i].createTime); 

                      });
                      console.log(d.body);

                      vm[target] = d.body;
                      deferred.resolve();
                  }
                  )

                  return deferred.promise;
              }

        getJson('/admin/getCreditRecordAll', 'smartTableData').then(function ()
        //getJson('app/pages/management/accumulationRelease/accumulationRelease.json', 'smartTableData').then(function ()
        {

           }
        );
   




    
  }

})();
