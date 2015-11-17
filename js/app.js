// Trevor Allen, Chan Im, John Akers, Jooneil Ahn INFO 343 D
// 11-17-15
// Team Challenge
// Checks validation for Team Challenge sign up page.

"use strict";

angular.module("app", [])

.controller("MainCtrl", ['$scope', function($scope) {
    
}])

.directive('sameAs', function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
            ngModel.$parsers.unshift(validate);

            // Force-trigger the parsing pipeline.
            scope.$watch(attrs.sameAs, function() {
                ngModel.$setViewValue(ngModel.$viewValue);
            });

            // Checks for validity
            function validate(value) {
                var isValid = scope.$eval(attrs.sameAs) == value;

                ngModel.$setValidity('same-as', isValid);

                return isValid ? value : undefined;
            }
        }
    };
});