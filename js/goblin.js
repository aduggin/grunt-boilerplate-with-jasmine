!function(global) {
  'use strict';

  function Goblin(name) {
    this.name = name || 'Zomeone';
  }

  Goblin.prototype.speak = function () {
    console.log('Waaagh!');
  };

  global.Goblin = Goblin;
}(this);



