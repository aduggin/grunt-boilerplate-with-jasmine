//var path = '';
//if (typeof window.karma !== 'undefined') {
//  path += 'base/test'
//}
//jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures';

jasmine.getFixtures().fixturesPath = 'base/test/spec/javascripts/fixtures';

beforeEach(function () {
  'use strict';
  loadFixtures('myfixture.html');
});

describe('myplugin', function () {
  'use strict';

  it('adds an "is-selected" class', function () {
    $('#my-fixture').myplugin();
    expect($('#my-fixture')).toHaveClass('is-selected');
  });

  it('is chainable', function () {
    $('#my-fixture').myplugin().addClass('foobar');
    expect($('#my-fixture')).toHaveClass('foobar');
  });
});
