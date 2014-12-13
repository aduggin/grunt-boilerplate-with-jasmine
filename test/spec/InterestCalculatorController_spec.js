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


  describe('getFormData()', function () {
    it('extracts values from the form and returns them as an object', function () {
      $(view.initialValue).val('80000');
      $(view.years).val('3');
      $(view.annualDeposit).val('7200');

      var expectedFormData = {
        initialValue: '80000',
        years: '3',
        annualDeposit: '7200'
      };

      expect(controller.getFormData()).toEqual(expectedFormData);
    });
  });
});