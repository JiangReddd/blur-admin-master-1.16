/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rule')
      .controller('medalRuleCtrl', medalRuleCtrl);

  /** @ngInject */
  function medalRuleCtrl($scope, $http, $q, $filter, editableOptions, editableThemes) {

        var vm = this;

        $http.get('/admin/getMedalRule').success(function (res)
        {
           vm.ruleIntro = res.body.ruleInfo;
           });

  }

})();
