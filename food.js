// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }

    prepare() {
        console.log(this.name + ' is being prepared');
    }

    isFresh() {
        if (this.daysToSpoil > 0) {
            console.log('There are ' + this.daysToSpoil + ' days left before ' + this.name + ' spoils.');
        } else {
            console.log(this.name + ' has spoiled.');
            this.fresh = false;
        }
    }

    aDayPasses() {
        this.daysToSpoil -= 1;
        this.isFresh();
    }
}

// Test
let apple = new Food('Apple', 5);
apple.prepare();
apple.isFresh();
apple.aDayPasses();

// Test BadFood
let pizzaWeapons = [{name: "Mouth Burn", hitPoints: 3}, {name: "Hot Pepper Storm", hitPoints: 4}, {name: "Cheese Grease", hitPoints: 5}];
let donutWeapons = [{name: "Sprinkle Spray", hitPoints: 3}, {name: "Icing Deluge", hitPoints: 4}, {name: "Sugar Shock", hitPoints: 5}];

let pizza = new BadFood('Pizza', 20, true, pizzaWeapons);
let donut = new BadFood('Donut', 20, true, donutWeapons);

pizza.prepare();
donut.prepare();
pizza.fight(donut);
// Do not edit below this line
module.exports = Food;
