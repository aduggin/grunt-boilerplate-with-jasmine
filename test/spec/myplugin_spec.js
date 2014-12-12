describe('myplugin', function () {
  'use strict';

  beforeEach(function () {
    loadFixtures('myfixture.html');
  });

  it('adds an "is-selected" class', function () {
    $('#my-fixture').myplugin();
    expect($('#my-fixture')).toHaveClass('is-selected');
  });

  it('is chainable', function () {
    $('#my-fixture').myplugin().addClass('foobar');
    expect($('#my-fixture')).toHaveClass('foobar');
  });
});