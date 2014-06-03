'use strict';

describe('Filter: ToUpper', function () {

  var inputToUpperTest;
  var inputToUpper;
  beforeEach(module('wixApp', function($provide) {
    inputToUpper = jasmine.createSpy('inputToUpperFactory');
    $provide.value('inputToUpper', inputToUpper);
  }));

  beforeEach(inject(function ($filter) {
    inputToUpperTest = $filter('inputToUpperFilter');
  }));

  it('should use inputToUpper factory', function() {
    inputToUpperTest('hello');
    expect(inputToUpper).toHaveBeenCalled();
  });

  it('shouldn\'t use inputToUpper factory', function() {
    inputToUpperTest(null);
    expect(inputToUpper).not.toHaveBeenCalled();
  });
});