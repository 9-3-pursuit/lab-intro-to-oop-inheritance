// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare(name) {
    console.log(`food ${name} is being prepared`);
  }
  isFresh(name, daysToSpoil, fresh) {
    if (fresh) {
      console.log(`There are ${daysToSpoil} days left before ${name} spoils.`);
    } else {
      console.log(`${name} has spoiled.`);
    }
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
