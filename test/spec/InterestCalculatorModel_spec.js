/*globals InterestCalculatorModel:false*/

describe('InterestCalculatorModel', function () {
  'use strict';

  var calc, calc2, calc3, calc4, calc5, calc6;
  var config = {
    initialValue: 18000,
    years: 1
  };
  var config2 = {
    initialValue: 80000,
    years: 3
  };
  var config3 = {
    initialValue: 2000000,
    years: 7
  };
  var config4 = {
    initialValue: 18000,
    years: 1,
    annualDeposit: 1200
  };
  var config5 = {
    initialValue: 80000,
    years: 3,
    annualDeposit: 7200
  };
  var config6 = {
    initialValue: 2000000,
    years: 7,
    annualDeposit: 60000
  };

  beforeEach(function () {
    calc = new InterestCalculatorModel(config);
    calc2 = new InterestCalculatorModel(config2);
    calc3 = new InterestCalculatorModel(config3);
    calc4 = new InterestCalculatorModel(config4);
    calc5 = new InterestCalculatorModel(config5);
    calc6 = new InterestCalculatorModel(config6);
  });

  describe('growthValue()', function () {
    it('returns the growth value including all interest', function () {
      expect(calc.growthValue()).toEqual(18900);
      expect(calc2.growthValue()).toEqual(92610);
      expect(calc3.growthValue()).toEqual(2814201);
      expect(calc4.growthValue()).toEqual(20160);
      expect(calc5.growthValue()).toEqual(116443);
      expect(calc6.growthValue()).toEqual(3327147);
    });
  });

  describe('interest()', function () {
    it('returns the amount of interest', function () {
      expect(calc.interest()).toEqual(900);
      expect(calc2.interest()).toEqual(12610);
      expect(calc3.interest()).toEqual(814201);
      expect(calc4.interest()).toEqual(2160);
      expect(calc5.interest()).toEqual(36443);
      expect(calc6.interest()).toEqual(1327147);
    });
  });

  describe('getData()', function () {
    it('returns an object of calculations', function () {
      var expectedData = {
        growthValue: 116443,
        interest: 36443
      };

      expect(calc5.getData()).toEqual(expectedData);
    });
  });

});