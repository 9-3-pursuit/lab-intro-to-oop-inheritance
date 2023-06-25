// Create class below
class Food {
    constructor (name, daysToSpoil, fresh = true) {
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare () {
        console.log(`${this.name} is being prepared`)
    }
    isFresh () {
        if (this.fresh && this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses () {
        if (this.daysToSpoil > 0) {
            this.daysToSpoil--;
            if (this.daysToSpoil > 0){
                this.isFresh(); 
            } else {
                this.fresh = false;
                this.isFresh(); 
            }
        } else {
            this.fresh = false;
            this.isFresh(); 
        }
    }
}

const bacon = new Food("Bacon", 1, true)
console.log(bacon);
bacon.prepare();
bacon.isFresh();
bacon.aDayPasses();

// Do not edit below this line
module.exports = Food;
