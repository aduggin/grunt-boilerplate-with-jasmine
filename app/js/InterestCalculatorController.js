(function(global) {
  'use strict';

  var proto;

  function InterestCalculatorController(view) {
    this.$container = $(view.container);
    this.$initialValue = $(view.initialValue);
    this.$years = $(view.years);
    this.$annualDeposit = $(view.annualDeposit);
    this.$submit = $(view.submit);
  }

  proto = InterestCalculatorController.prototype;

  proto.init = function () {
    this.$container.find(this.$submit ).on('click', this.submitHandler);
  };

  proto.submitHandler = function (event) {
    console.log(event);
  };

  proto.getInitialValue = function () {
    return this.$container.find(this.$initialValue).val();
  };

  proto.getYears = function () {
    return this.$container.find(this.$years).val();
  };

  proto.getAnnualDeposit = function () {
    return this.$container.find(this.$annualDeposit).val();
  };


  global.InterestCalculatorController = InterestCalculatorController;

})(this);