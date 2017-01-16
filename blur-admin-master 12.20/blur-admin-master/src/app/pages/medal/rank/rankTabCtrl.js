/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.medal.rank')
      .controller('rankTabCtrl', rankTabCtrl);

  /** @ngInject */
  function rankTabCtrl() {
    var vm = this;
    vm.navigationCollapsed = true;
    vm.tabs = [{
      label: 'inbox',
      name: '个人榜',
      newMails: 0
    }];
  }
})();
