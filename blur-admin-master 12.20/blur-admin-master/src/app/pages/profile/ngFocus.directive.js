/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
      .directive('ngFocus', ngFocus);

  /** @ngInject */
  function ngFocus() {
    var FOCUS_CLASS = "ng-focused";
        return{
            restrict:'A',
            require:'ngModel',
            link: function (scope, element, attrs,ctrl) {
                ctrl.$focused = false;
                element.bind('focus', function (evt) {
                    element.addClass(FOCUS_CLASS);
                    scope.$apply(function () {
                        ctrl.$focused = true;
                    });
                }).bind('blur', function () {
                    element.removeClass(FOCUS_CLASS);
                    scope.$apply(function(){
                        ctrl.$focused = false;
                    })
                })
            }
        }
  }
})();