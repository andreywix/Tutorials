'use strict';

angular.module('wixApp').filter('inputToUpperFilter', function (inputToUpper) {
    return function(input) {
        if(typeof input === 'string') {
            inputToUpper(input);
        } else {
            return '';
        }
    }
});