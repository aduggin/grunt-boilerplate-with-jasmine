/*globals InterestCalculatorModel:false*/

(function(global) {
  'use strict';

  var proto, self;

  function InterestCalculatorController(view) {
    this.$container = $(view.container);
    this.$initialValue = $(view.initialValue);
    this.$years = $(view.years);
    this.$annualDeposit = $(view.annualDeposit);
    this.$submit = $(view.submit);

    self = this;
  }

  proto = InterestCalculatorController.prototype;

  proto.init = function () {
    this.$container.find(this.$submit ).on('click', this.submitHandler);
  };

  proto.submitHandler = function () {
    var formData = self.getFormData();
    console.log(self.getCalculationsFromModel(formData));
  };

  proto.getFormData = function () {
    var initialValue = this.$container.find(this.$initialValue).val() || 0;
    var years = this.$container.find(this.$years).val() || 0;
    var annualDeposit = this.$container.find(this.$annualDeposit).val() || 0;

    var formData = {
      initialValue:   parseInt(initialValue),
      years:          parseInt(years),
      annualDeposit:  parseInt(annualDeposit)
    };

    return formData;
  };

  proto.getCalculationsFromModel = function(formData) {
    var model = new InterestCalculatorModel(formData);

    return model.getData();
  };

  global.InterestCalculatorController = InterestCalculatorController;

})(this);