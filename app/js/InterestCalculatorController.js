(function(global) {
  'use strict';

  function InterestCalculatorController(view) {
    this.$container = $(view.container);
    this.$initialValue = $(view.initialValue);
    this.$years = $(view.years);
    this.$annualDeposit = $(view.annualDeposit);
    this.$submit = $(view.submit);
  }

  InterestCalculatorController.prototype.init = function () {
    this.$container.find(this.$submit ).on('click', this.submitHandler);
  };

  InterestCalculatorController.prototype.submitHandler = function (event) {
    console.log(event);
  };

  InterestCalculatorController.prototype.getInitialValue = function () {
    return this.$container.find(this.$initialValue).val();
  };

  InterestCalculatorController.prototype.getYears = function () {
    return this.$container.find(this.$years).val();
  };

  InterestCalculatorController.prototype.getAnnualDeposit = function () {
    return this.$container.find(this.$annualDeposit).val();
  };


  global.InterestCalculatorController = InterestCalculatorController;

})(this);