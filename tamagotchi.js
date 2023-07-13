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
    console.log(`Hello, I'm ${this.name}!`);
  }
  status() {
    console.log(`
    ********************************
    Energy: ${this.energy}
    Full: ${this.full}
    Mood: ${this.mood}
    Sick: ${this.sick}
    ********************************`);
  }
  eat() {
    this.full = this.full + 2;
    this.energy--;

    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy = this.energy - 3;
      this.sick = false;
    } else {
      console.log(`${this.name} refuses to take medicine`);
      this.energy--;
    }
  }
  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      this.energy = this.energy - 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log(`I'm too tired to play`);
      this.energy--;
    } else {
      this.mood = this.mood + 2;
      this.energy--;
      this.full--;
    }
  }
  sleep() {
    this.energy = this.energy + 4;
    this.full = this.full - 3;
  }
  timePasses() {
    if (!this.sick) {
      this.mood = this.mood - 2;
      this.full--;
      this.energy--;
    } else {
      this.mood = this.mood - 3;
      this.full = this.full - 2;
      this.energy = this.energy - 2;
    }
  }
  badGuardian() {
    console.log(`${this.name} has been rehomed`);
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}
// Do not edit below this line
module.exports = Tamagotchi;
