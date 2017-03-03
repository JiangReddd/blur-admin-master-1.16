/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function ()
{
    'use strict';

    angular.module('BlurAdmin.pages.medal.history')
    .controller('historyDetailCtrl', historyDetailCtrl);

    /** @ngInject */
    function historyDetailCtrl($http, $q, $filter, editableOptions, editableThemes,$stateParams)
    {
    	var vm = this;

        //$http.get('app/pages/medal/history/history.json').then(function(res) {
        $http.get('/user/getMyMedalRecord').then(function(res) {
            console.log(res.data.body);
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


            if (vm.mail.medalChangeLevel > 0 ) {
                    vm.mail.upOrDown = "上升";
                }else{
                    vm.mail.upOrDown = "下降";
                    vm.mail.medalChangeLevel = Math.abs(vm.mail.medalChangeLevel);
                }



            console.log(vm.mail); 


        });

    }

}
)();
