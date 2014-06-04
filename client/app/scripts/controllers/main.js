'use strict';

angular.module('wixApp')
  .controller('MainCtrl', function ($scope, $wix, $filter, inputToUpper) {

    $scope.handleEvent = function(event) {
      $scope.$apply(function() {
        $scope.message = event;
      });
    };
    $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);
    $scope.$watch('testInput', function (newValue, oldValue) {
      $scope.test = $filter('inputToUpperFilter')(newValue);
    });
    //$scope.testInput = "hello";
    if ($wix.Utils.getViewMode() !== 'standalone') {
      $scope.instanceId = $wix.Utils.getInstanceId();
      $scope.instance = $wix.Utils.getInstance();
    }
  });