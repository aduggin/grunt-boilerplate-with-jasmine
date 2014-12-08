(function(global) {
  'use strict';

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  global.numberWithCommas = numberWithCommas;

})(this);