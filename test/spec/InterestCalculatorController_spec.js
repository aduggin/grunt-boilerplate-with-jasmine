/*globals InterestCalculatorController:false*/

describe('controller', function () {
  'use strict';

  var view, controller;

  beforeEach(function() {
    loadFixtures('interest-calculator.html');
    view = {
      container: '#interest-calculator',
      initialValue: '#initial-value',
      years: '#years',
      annualDeposit: '#payment',
      submit: 'input[type=submit]'
    };
    controller = new InterestCalculatorController(view);
  });

  describe('init()', function () {
    it('adds click handler to calculate button', function () {
      controller.init();
      var $submit = $(view.submit);

      expect($submit).toHandleWith('click', controller.submitHandler);
    });
  });


  describe('getInitialValue()', function () {
    it('returns the value of the "Initial value" field', function () {
      $(view.initialValue).val('20000');

      expect(controller.getInitialValue()).toEqual('20000');
    });
  });

  describe('getYears()', function () {
    it('returns the value of the "years" field', function () {
      $(view.years).val('5');

      expect(controller.getYears()).toEqual('5');
    });
  });

  describe('getAnnualDeposit()', function () {
    it('returns the value of the "annual deposit" field', function () {
      $(view.annualDeposit).val('5200');

      expect(controller.getAnnualDeposit()).toEqual('5200');
    });
  });

});