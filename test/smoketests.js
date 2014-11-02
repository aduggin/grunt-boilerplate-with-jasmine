module.exports = {
  'myplugin is working': function (test) {
    test.open('http://0.0.0.0:9000/')
      .query('#myplugin-target')
        .assert.attr('class', 'is-selected')
      .end()
      .done();
  },
  'goblin is working': function (test) {
    test.open('http://0.0.0.0:9000/')
      .query('#goblin-said')
      .assert.text().is('Dakka')
      .end()
      .done();
  }
};