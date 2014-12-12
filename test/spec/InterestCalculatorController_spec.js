/*globals InterestCalculatorController:false*/

beforeEach(function () {
  'use strict';
  loadFixtures('interest-calculator.html');
});

describe('controller', function () {
  'use strict';

  it('adds click handler to calculate button', function () {
    var controller = new InterestCalculatorController('#interest-calculator');
    controller.init();

    var $submit = $('#interest-calculator input[type=submit]');
    expect($submit).toHandleWith('click', controller.submitHandler);
  });

});