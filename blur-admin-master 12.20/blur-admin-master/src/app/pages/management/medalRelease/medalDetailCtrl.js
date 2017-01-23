/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.management.medalRelease')
    .controller('medalDetailCtrl', medalDetailCtrl);

    /** @ngInject */
    function medalDetailCtrl($http, $q, $filter, editableOptions, editableThemes,$stateParams)
    {
    	var vm = this;

        //$http.get('app/pages/management/medalRelease/medalRelease.json').then(function(res) {
        $http.get('/admin/getMedalRecord').then(function(res) {
            var messages = res.data.body.sort(function(a, b) {
                if (a.medalRecordId > b.medalRecordId) return 1;
                if (a.medalRecordId < b.medalRecordId) return -1;
            }).reverse();
            vm.mail = messages.filter(function(m) {
                return m.medalRecordId == $stateParams.medalRecordId;
            })[0];
            if (vm.mail.medalType == 1) {
                vm.mail.medalType = "常规";
            };
            if (vm.mail.medalType == 2) {
                vm.mail.medalType = "年度勋章";
            };
            if (vm.mail.medalType == 3) {
                vm.mail.medalType = "职业生涯";
            };
            if (vm.mail.growType == 0) {
                vm.mail.growType = "不可成长";
            };
            if (vm.mail.growType == 1) {
                vm.mail.growType = "可成长";
            };
            var newDate = new Date();
            var exchangeUpdateTime = vm.mail.updateTime;
            vm.mail.updateTime = newDate.toLocaleDateString(newDate.setTime(exchangeUpdateTime));
            console.log(vm.mail.updateTime); 
            console.log(vm.mail); 


        });

    }

}
)();
