/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.accumulationRule')
      .controller('accumulationRuleCtrl', accumulationRuleCtrl);

  /** @ngInject */
  function accumulationRuleCtrl($scope, $http, $q, $filter, editableOptions, editableThemes) {

        var vm = this;

        $http.get('/admin/getCreditRule').success(function (res)
        {
            console.log(res);
            vm.ruleIntro = res.body.ruleInfo;
           });

  }

})();
