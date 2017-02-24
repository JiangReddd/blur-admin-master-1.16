/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.management.medalRelease')
    .controller('accumulationDetailCtrl', accumulationDetailCtrl);

    /** @ngInject */
    function accumulationDetailCtrl($http, $q, $filter, editableOptions, editableThemes,$stateParams)
    {
    	var vm = this;

        //$http.get('app/pages/management/accumulationRelease/accumulationRelease.json').then(function(res) {
        $http.get('/admin/getCreditRecordAll').then(function(res) {
            var messages = res.data.body.sort(function(a, b) {
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;
            }).reverse();
            vm.mail = messages.filter(function(m) {
                return m.id == $stateParams.id;
            })[0];/*
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
            };*/
            var newDate = new Date();
            var exchangeCreateTime = vm.mail.creditTime;
            vm.mail.creditTime = newDate.toLocaleDateString(newDate.setTime(exchangeCreateTime));
            console.log(vm.mail.creditTime); 
            console.log(vm.mail); 


        });

    }

}
)();
