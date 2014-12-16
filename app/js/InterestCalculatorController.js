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
    console.log(self.getFormData());
  };

  proto.getFormData = function () {
    var formData = {
      initialValue:   this.$container.find(this.$initialValue).val(),
      years:          this.$container.find(this.$years).val(),
      annualDeposit:  this.$container.find(this.$annualDeposit).val()
    };

    return formData;
  };

  proto.getCalculationsFromModel = function(formData) {
    var model = new InterestCalculatorModel(formData);

    return model.getData();
  };

  global.InterestCalculatorController = InterestCalculatorController;

})(this);