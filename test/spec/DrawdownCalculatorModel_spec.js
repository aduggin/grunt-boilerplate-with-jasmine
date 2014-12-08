/*globals DrawdownCalculatorModel:false*/

describe('DrawdownCalculatorModel', function () {
  'use strict';

  var calc = new DrawdownCalculatorModel(18000, 3600);
  var calc2 = new DrawdownCalculatorModel(18000, 5000);
  var calc3 = new DrawdownCalculatorModel(80000, 12000);
  var calc4 = new DrawdownCalculatorModel(80000, 10000);

  describe('howLongMoneyWillLast', function () {
    it('calculates how long money will last as a decimal', function () {
      expect(calc.howLongMoneyWillLast()).toEqual(5.6);
      expect(calc2.howLongMoneyWillLast()).toEqual(3.9);
      expect(calc3.howLongMoneyWillLast()).toEqual(7.8);
      expect(calc4.howLongMoneyWillLast()).toEqual(9.8);
    });
  });
});