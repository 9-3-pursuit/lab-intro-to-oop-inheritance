// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {
    console.log(`Hello, I'm ${this.name} !`);
  }
  status() {
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${
        this.energy
      }\n${this.sick ? `I am not sick` : `I am sick`}`
    );
  }
  eat() {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) this.sick = true;
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log(`${this.name} needs no medicine because they are well.`);
      this.energy -= 1;
    }
  }
  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
      console.log(`Not feeling well, can't play`);
    } else {
      if (this.mood > 9) {
        this, (energy -= 2);
        this.full -= 1;
      }
      if (this.energy < 3) {
        console.log(`I am too tired to play`);
      }
    }
  }
  sleep() {}
  timePasses() {}
  badGuardian() {}
}

let cutie = new Tamagotchi("cutie", 3, 6, 2, true, false);

cutie.greet() // Hello, I'm cutie !

cutie.status() // --v
 // My mood is: 2;
 // I am this full: 6;
 // My energy is: 3;
 // I am not sick

// cutie.eat() // based off energy, sick & full levels
 cutie.medicate()
cutie.play() // I am too tired to play
// cutie.sleep()
// cutie.timePasses()
// cutie.badGuardian()

// Do not edit below this line
module.exports = Tamagotchi;
