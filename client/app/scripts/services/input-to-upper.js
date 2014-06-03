'use strict';

angular.module('wixApp').factory('inputToUpper', function inputToUpperFactory() {
  return function(input) {

        return input.toUpperCase();

    };
});