/*globals numberWithCommas:false*/

describe('numberWithCommas', function () {
  'use strict';

  it('adds commas to a number', function () {
    expect(numberWithCommas(1000)).toEqual('1,000');
    expect(numberWithCommas(10000)).toEqual('10,000');
    expect(numberWithCommas(100000)).toEqual('100,000');
    expect(numberWithCommas(1000000)).toEqual('1,000,000');
    expect(numberWithCommas(1)).toEqual('1');
    expect(numberWithCommas(10)).toEqual('10');
    expect(numberWithCommas(100)).toEqual('100');
  });

});