/*globals decimalYearToString:false*/

describe('decimalYearToString', function () {
  'use strict';

  it('converts a year decimal value to a readable string', function () {
    expect(decimalYearToString(0.1)).toEqual('1 month');
    expect(decimalYearToString(0.2)).toEqual('2 months');
    expect(decimalYearToString(1.3)).toEqual('1 year 3 months');
    expect(decimalYearToString(2.4)).toEqual('2 years 4 months');
    expect(decimalYearToString(3.5)).toEqual('3 years 6 months');
    expect(decimalYearToString(4.6)).toEqual('4 years 7 months');
    expect(decimalYearToString(5.7)).toEqual('5 years 8 months');
    expect(decimalYearToString(6.8)).toEqual('6 years 9 months');
    expect(decimalYearToString(7.9)).toEqual('7 years 10 months');
    expect(decimalYearToString(8.0)).toEqual('8 years');
    expect(function() {decimalYearToString('-2.4');}).toThrow(new Error('Argument can not be a negative number'));
    expect(function() {decimalYearToString('xy');}).toThrow(new Error('Argument can not be string'));
  });

});