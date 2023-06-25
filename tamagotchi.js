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

  // if energy <= 3 he cannot play
  //   if energy > 3 then he can play, mood will increase, he is not sick, his enetgy low, his full

  //   - play: increases mood by 2, reduces energy and full by 1,
  //   - will not play if tamagotchi is sick,
  //   - if asked to play when sick, reduce mood and energy by 1
  //   - will not play if mood is above 9, reduce energy by 2 and full by 1
  //   - will not play if energy is less than or equal to 3
  //     - console log "I am too tired to play" - reduce energy by 1
}

// Do not edit below this line
module.exports = Tamagotchi;
