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
    console.log("Greeting:", `Hello, I'm ${this.name} !`);
  }
  status() {
    console.log(
      "Status is:\n",
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is:${
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
      this.energy -= 1;
      console.log("Medicine needed? :", `Refusal to take medicine`);
    }
  }
  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
      console.log("Can play? :", `I am too sick to play`);
    } else {
      if (this.mood > 9) {
        this.energy -= 2;
        this.full -= 1;
        return;
      }
      if (this.energy <= 3) {
        this.energy -= 1;
        console.log("Can play? :", `I am too tired to play`);
      }
      this.moood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }
  sleep() {
    this.energy += 4;
    this.full -= 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
  badGuardian() {
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
      console.log("Rehomed? :", ` The tamagotchi has been rehomed.`);
    }
  }
}

let cutie = new Tamagotchi("cutie", 3, 4, 2, true, false);
let silly = new Tamagotchi("silly", 8, 10, 9, false, true);
let grumpy = new Tamagotchi("grumpy", 0, 0, 0, true, true);

// * All logs --v

// based off energy, sick & mood/full levels
cutie.eat();
cutie.sleep();
cutie.timePasses();
silly.eat();
silly.sleep();
silly.timePasses();
grumpy.eat();
grumpy.sleep();
grumpy.timePasses();

// cutie --v
cutie.greet(); // Hello, I'm cutie !
cutie.status(); // --v
// My mood is: 2;
// I am this full: 4;
// My energy is: 3;
// I am not sick
cutie.medicate();
cutie.play(); // I am too tired to play
cutie.badGuardian(); //The tamagotchi has been rehomed.

// silly --v
silly.greet(); // Hello, I'm silly !
silly.status(); // --v
// My mood is: 6
// I am this full: 9
// My energy is: 9
// I am not sick
silly.medicate();
silly.play();
silly.badGuardian();

// grumpy --v
grumpy.greet(); // Hello, I'm grumpy !
grumpy.status(); // --v
// My mood is: 0
// I am this full: 0
// My energy is: 0
// I am not sick
grumpy.medicate();
grumpy.play();
grumpy.badGuardian();

// Do not edit below this line
module.exports = Tamagotchi;
