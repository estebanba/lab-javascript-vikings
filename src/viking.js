// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    console.log(`The soldier/'s previous health was: ${this.health}.`)
    this.health = this.health - damage;
    console.log(`The soldier/'s current health is: ${this.health}.`)
  }
}

const newSoldier = new Soldier (100, 100);
newSoldier.receiveDamage(20);

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
