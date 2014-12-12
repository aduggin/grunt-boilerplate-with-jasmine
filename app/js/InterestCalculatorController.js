(function(global) {
  'use strict';

  function InterestCalculatorController(view) {
    this.$view = $(view);
  }

  InterestCalculatorController.prototype.init = function () {
    this.$view.find('input[type=submit]').click(this.submitHandler);
  };

  InterestCalculatorController.prototype.submitHandler = function () {
    console.log( 'Handler for .click() called.');
  };

  global.InterestCalculatorController = InterestCalculatorController;

})(this);