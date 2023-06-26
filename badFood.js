
class BadFood extends Food {
    constructor(name, daysToSpoil = 20, fresh = true, weapons = [3,4,5]) {
        super(name, daysToSpoil, fresh)
        this.weapons = weapons;
    }

    prepare() {
        let randomize = Math.floor(Math.random() * 100);
        if (randomize % 2 === 0) {
            console.log(`I am ${this.name} and my calories are too high to count!`);
        } else {
            console.log(`I am ${this.name} and you are just a passing trend!`);
        }
    }

    fight(badFood) {
        
    }
}

module.exports = BadFood;