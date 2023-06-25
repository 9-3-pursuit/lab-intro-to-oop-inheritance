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
    } else {
      console.log("refusal to take medicine");
      this.energy--;
    }
  }

  play() {
    if (!sick) {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    } else {
      this.mood--;
      this.energy--;
    }
    if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
    }
    if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy--;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
