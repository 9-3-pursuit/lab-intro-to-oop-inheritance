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
  medicate() {}
  play() {}
  sleep() {}
  timePasses() {}
  badGuardian() {}
}

let cutie = new Tamagotchi("cutie", 3, 6, 2, false);

cutie.status();
// Do not edit below this line
module.exports = Tamagotchi;
