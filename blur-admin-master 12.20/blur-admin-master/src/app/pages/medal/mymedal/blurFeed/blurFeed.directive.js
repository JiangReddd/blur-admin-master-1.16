/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.medal.mymedal')
    .directive('blurFeed1', blurFeed1);
  angular.module('BlurAdmin.pages.medal.mymedal')
    .directive('blurFeed2', blurFeed2);

  angular.module('BlurAdmin.pages.medal.mymedal')
    .directive('blurFeed3', blurFeed3);

  angular.module('BlurAdmin.pages.medal.mymedal')
    .directive('blurFeed4', blurFeed4);

  angular.module('BlurAdmin.pages.medal.mymedal')
    .directive('blurFeed5', blurFeed5);


  /** @ngInject */
  function blurFeed1() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl1',
      templateUrl: 'app/pages/medal/mymedal/blurFeed/blurFeed.html'
    };
  }

  /** @ngInject */
  function blurFeed2() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl2',
      templateUrl: 'app/pages/medal/mymedal/blurFeed/blurFeed.html'
    };
  }

  /** @ngInject */
  function blurFeed3() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl3',
      templateUrl: 'app/pages/medal/mymedal/blurFeed/blurFeed.html'
    };
  }

  /** @ngInject */
  function blurFeed4() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl4',
      templateUrl: 'app/pages/medal/mymedal/blurFeed/blurFeed.html'
    };
  }

  /** @ngInject */
  function blurFeed5() {
    return {
      restrict: 'E',
      controller: 'BlurFeedCtrl5',
      templateUrl: 'app/pages/medal/mymedal/blurFeed/blurFeed.html'
    };
  }
})();