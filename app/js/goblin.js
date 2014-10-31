!function(global) {
  'use strict';

  function Goblin(name) {
    this.name = name || 'Zomeone';
  }

  Goblin.prototype.speak = function () {
    console.log('Waaagh!');
  };

  Goblin.prototype.boo = function () {
    console.log('Boo!');
  };

  Goblin.prototype.laugh = function () {
    console.log('Tee hee hee!');
  };

  global.Goblin = Goblin;

}(this);



