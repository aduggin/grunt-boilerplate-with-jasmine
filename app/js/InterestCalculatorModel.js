(function(global) {
  'use strict';

  function InterestCalculatorModel(config) {

    var DEFAULT_INTEREST_RATE = 5;

    this.presentValue = config.initialValue;
    this.yearsOfGrowth = config.years;
    this.annualPayment = config.annualDeposit || 0;
    this.interestRate =  DEFAULT_INTEREST_RATE;
  }

  InterestCalculatorModel.prototype.growthValue = function () {
    var pensionPot =  this.presentValue,
      yearsOfGrowth = this.yearsOfGrowth;

    while (yearsOfGrowth > 0) {
      pensionPot = (pensionPot + this.annualPayment) * (1 + this.interestRate/100);
      yearsOfGrowth--;
    }

    return Math.round(pensionPot);
  };

  InterestCalculatorModel.prototype.interest = function () {
    return this.growthValue() - this.presentValue;
  };

  InterestCalculatorModel.prototype.getData = function () {
    var data = {
      growthValue: this.growthValue(),
      interest: this.interest()
    };

    return data;
  };

  global.InterestCalculatorModel = InterestCalculatorModel;

})(this);
