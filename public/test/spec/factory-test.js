'use strict';

describe('Factory: ToUpper', function () {

  var inputToUpperTest;
  beforeEach(module('wixApp'));

  beforeEach(inject(function (inputToUpper) {
    inputToUpperTest = inputToUpper;
  }));

  it('should make input string uppercase', function() {
    expect(inputToUpperTest('anything')).toBe('ANYTHING');

  });
});