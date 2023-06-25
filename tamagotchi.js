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
    if (this.sick) {
      console.log(
        `My mood is: ${this.mood} \n I am this full: ${this.full} \n My energy is ${this.energy} \n I am sick`
      );
    } else {
      console.log(
        `My mood is: ${this.mood} \n I am this full: ${this.full} \n My energy is ${this.energy} \n I am not sick`
      );
    }
  }
  eat() {
    this.full += 2;
    this.energy -= 1;

    if (this.full > 10) {
      this.sick = true;
    }
  }
  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      this.energy--;
      console.log("refusal to take medicine");
    }
  }

  play() {
    if (this.sick === false && this.energy > 3 && this.mood <= 9) {
      this.mood += 2;
      this.energy--;
      this.full--;
    }

    if (this.sick) {
      this.mood--;
      this.energy--;
    }

    if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    }

    if (this.energy <= 3) {
      this.energy--;
      console.log("I am too tired to play");
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick === false) {
      this.mood -= 2;
      this.full--;
      this.energy--;
    } else {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
