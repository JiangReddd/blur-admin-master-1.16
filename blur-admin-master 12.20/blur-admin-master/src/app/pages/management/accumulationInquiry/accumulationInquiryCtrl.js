/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.accumulationInquiry')
      .controller('accumulationInquiryCtrl', accumulationInquiryCtrl);

  /** @ngInject */
  function accumulationInquiryCtrl($http, $q, $filter, editableOptions, editableThemes) {

      var vm = this;

              function getJson(url, target)
              {
                  var deferred = $q.defer();
                  $http.get(url)
                  .success(function (d)
                  {
                      //console.log(d.body);
                      $.each(d.body,function(i){
                        var newDate = new Date();
                        var exchangecreditTime = d.body[i].creditTime;
                        d.body[i].creditTime = newDate.toLocaleDateString(newDate.setTime(exchangecreditTime));
                        console.log(d.body[i].creditTime); 

                      });
                      //console.log(d.body);

                      vm[target] = d.body;
                      deferred.resolve();
                  }
                  )

                  return deferred.promise;
              }

        //getJson('/admin/getCreditRecordAll', 'smartTableData').then(function ()
        getJson('app/pages/management/accumulationInquiry/accumulationInquiry.json', 'smartTableData').then(function ()
        {

           }
        );
   




    
  }

})();
