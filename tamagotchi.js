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
      console.log(`refusal to take medicine`);
      this.energy -= 1;
    }
  }
  play() {
    if (!this.sick) {
      this.mood -= 1;
      this.energy -= 1;
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
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.fullness -= 1;
      this.energy -= 1;
    } else {
      this.mood -= 3;
      this.fullness -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy || this.mood || this.full <= 0) {
      this.rehomed = true;
      console.log(` The tamagotchi has been rehomed.`);
    }
  }
}

let cutie = new Tamagotchi("cutie", 3, 6, 2, true, false);
let silly = new Tamagotchi("silly", 8, 10, 9, false, true);

cutie.greet(); // Hello, I'm cutie !

cutie.status(); // --v
// My mood is: 2;
// I am this full: 6;
// My energy is: 3;
// I am not sick

cutie.eat(); // based off energy, sick & full levels
cutie.medicate();
cutie.play(); // I am too tired to play
cutie.sleep();
cutie.timePasses();
cutie.badGuardian(); //The tamagotchi has been rehomed.

silly.greet() // Hello, I'm silly !
silly.status()
// My mood is: 9

// I am this full: 10
// My energy is: 8
// I am sick
silly.eat()
silly.medicate()
silly.play()
silly.sleep()
silly.timePasses()
silly.badGuardian() //  The tamagotchi has been rehomed.

// Do not edit below this line
module.exports = Tamagotchi;
