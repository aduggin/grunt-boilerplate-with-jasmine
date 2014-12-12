(function ($) {
  'use strict';

  $.fn.myplugin = function () {
    this.addClass('is-selected');
    return this;
  };
  
})(jQuery);