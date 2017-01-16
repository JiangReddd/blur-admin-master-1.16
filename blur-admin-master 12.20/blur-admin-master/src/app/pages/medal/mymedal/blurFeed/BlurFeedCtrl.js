/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.medal.mymedal')
        .controller('BlurFeedCtrl1', BlurFeedCtrl1);

    angular.module('BlurAdmin.pages.medal.mymedal')
        .controller('BlurFeedCtrl2', BlurFeedCtrl2);


    angular.module('BlurAdmin.pages.medal.mymedal')
        .controller('BlurFeedCtrl3', BlurFeedCtrl3);


    angular.module('BlurAdmin.pages.medal.mymedal')
        .controller('BlurFeedCtrl4', BlurFeedCtrl4);


    angular.module('BlurAdmin.pages.medal.mymedal')
        .controller('BlurFeedCtrl5', BlurFeedCtrl5);


    /** @ngInject */
    function BlurFeedCtrl1($http, $scope) {
        $http.get('app/pages/medal/mymedal/feed1.json').then(function(res) {
            $scope.feed = res.data;
            $scope.expandMessage = function(message) {
                message.expanded = !message.expanded;
            };
        });
    }

        function BlurFeedCtrl2($http, $scope) {
        $http.get('app/pages/medal/mymedal/feed2.json').then(function(res) {
            $scope.feed = res.data;
            $scope.expandMessage = function(message) {
                message.expanded = !message.expanded;
            };
        });
    }

        function BlurFeedCtrl3($http, $scope) {
        $http.get('app/pages/medal/mymedal/feed3.json').then(function(res) {
            $scope.feed = res.data;
            $scope.expandMessage = function(message) {
                message.expanded = !message.expanded;
            };
        });
    }

        function BlurFeedCtrl4($http, $scope) {
        $http.get('app/pages/medal/mymedal/feed4.json').then(function(res) {
            $scope.feed = res.data;
            $scope.expandMessage = function(message) {
                message.expanded = !message.expanded;
            };
        });
    }

        function BlurFeedCtrl5($http, $scope) {
        $http.get('app/pages/medal/mymedal/feed5.json').then(function(res) {
            $scope.feed = res.data;
            $scope.expandMessage = function(message) {
                message.expanded = !message.expanded;
            };
        });
    }
})();