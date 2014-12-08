/*globals InterestCalculatorModel:false*/

describe('InterestCalculatorModel', function () {
  'use strict';

  var calc = new InterestCalculatorModel(18000, 1);
  var calc2 = new InterestCalculatorModel(80000, 3);
  var calc3 = new InterestCalculatorModel(2000000, 7);
  var calc4 = new InterestCalculatorModel(18000, 1, 1200);
  var calc5 = new InterestCalculatorModel(80000, 3, 7200);
  var calc6 = new InterestCalculatorModel(2000000, 7, 60000);

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

});