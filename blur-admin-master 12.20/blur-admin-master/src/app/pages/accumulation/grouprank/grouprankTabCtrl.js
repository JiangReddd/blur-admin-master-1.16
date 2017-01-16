/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.grouprank')
      .controller('groupRankTabCtrl', groupRankTabCtrl);

  /** @ngInject */
  function groupRankTabCtrl() {
    var vm = this;
    vm.navigationCollapsed = true;
    vm.tabs = [{
      label: 'inbox',
      name: '室班组排行',
      newMails: 0
    }];
  }
})();
