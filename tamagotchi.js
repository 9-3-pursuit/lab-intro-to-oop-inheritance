// Create class below
class Tamagotchi {
  constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
    this.name = name,
    this.energy = energy,
    this.full = full,
    this.mood = mood,
    this.sick = sick,
    this.rehomed = rehomed
  }
  greet() {

  }
  eat() {
    this.full = this.full + 2;
    this.energy = this.energy - 1
    if(this.full > 10) {
        this.sick = true;
    }
  }
  medicate() {
    if(this.sick === true) {
        this.sick = false;
        this.full = 9;
        this.energy = this.energy - 3;
    }else {
        this.energy = this.energy - 1
    }
  }
  play () {
    this.mood = this.mood + 2;
    this.full = this.full - 1;
    this.energy = this.energy - 1;
    if(this.sick === true) {
    //    this.mood = 9,
    //    this.energy = 5,
    //    this.full = 8
    }
    if(this.mood > 9) {
        // this.energy <= 3
    }
    if(this.energy <= 3) {
    
    }
  }
  sleep() {
    this.energy = this.energy + 4,
    this.full = this.full - 3
  }
  timePasses() {
    if(this.sick === false) {
       this.mood = this.mood - 2,
       this.full = this.full - 1,
       this.energy = this.energy -1
    }else {
        this.mood = this.mood - 3,
       this.full = this.full - 2,
       this.energy = this.energy - 2

    }
  }
  badGuardian() {
    if(this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
        this.rehomed = true
    }
  }
  status() {

  }
}
const buzz = new Tamagotchi
// Do not edit below this line
module.exports = Tamagotchi;
