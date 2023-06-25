// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(this.walkStyle);
  }
  greet(otherBeing) {
    console.log(`Sniff sniff, ${otherBeing}`);
  }
  classyGreeting(otherClassyBeing) {
    console.log(`Howdy, there, ${otherClassyBeing.name}`);
  }
  ageUp() {
    this.age++;
  }
}
// Do not edit below this line
module.exports = Food;
