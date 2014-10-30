/*globals Goblin:false*/

describe('Goblin', function () {
  'use strict';

  it('has name', function () {
    var goblin = new Goblin('Dakka');
    expect(goblin.name).toEqual('Dakka');
  });

  it('can speak', function () {
    spyOn(console, 'log');
    var goblin = new Goblin();
    goblin.speak();
    expect(console.log).toHaveBeenCalledWith('Waaagh!');
  });
});