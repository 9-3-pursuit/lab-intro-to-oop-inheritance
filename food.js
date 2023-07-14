
// Create class below
class Food {
  constructor(name, daysToSpoil = 1, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil > 0 ? (this.daysToSpoil -= 1) : (this.daysToSpoil = 0);
    this.isFresh();
  }
}

const donut = [
  {
    name: "Sprinkle Spray",
    hitPoints: 3,
  },
  {
    name: "Icing Deluge",
    hitPoints: 4,
  },
  {
    name: "Sugar Shock",
    hitPoints: 5,
  },
];
const pizza = [
  {
    name: "Mouth Burn",
    hitPoints: 3,
  },
  {
    name: "Hot Pepper Storm",
    hitPoints: 4,
  },
  {
    name: "Cheese Grease",
    hitPoints: 5,
  },
];

// console.log(donut)
// console.log(pizza)

// Bonus Attempt --v

class BadFood extends Food {
  constructor(name, daysToSpoil, fresh = true, weapons) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }
 isFresh(){}
  prepare() {
    console.log(` I am ${this.name ? `and my calories are too high to count!` : `and you are just a passing trend!`}`)
  }
  fight() {}
}


// added the features/details of your methods here when adding a instantiate
let sushi = new Food("sushi", 6, false);
let yogurt = new Food("yogurt", 15, true);



sushi.prepare(); // sushi is being prepared
sushi.isFresh(); // There are 6 days left before sushi spoils
sushi.aDayPasses(); // There are 5 days left before sushi spoils

yogurt.prepare(); // yogurt is being prepared
yogurt.isFresh(); // There are 15 days left before yogurt spoils
yogurt.aDayPasses(); // There are 14 days left before yogurt spoils

// Do not edit below this line
module.exports = Food;
