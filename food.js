// Create class below
class Food {
    constructor (name, daysToSpoil, fresh = true){
        this.name = name;
        this.daysToSpoil = 0;
        this.fresh = fresh; 
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(number){
       if(number > 0){
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    } else {
        console.log(`${this.name} has spoiled.`)
    }
    }
    aDayPasses(){
        let check = this.daysToSpoil - 1
        console.log(this.isFresh(check))
    }
}
//testing classes 
//create an instance
let breakfast = new Food("eggs", 6 , true);
let lunch = new Food("potatoe", 0 , false);
let dinner = new Food("sushi", 2 , true);

//run each method at least once
console.log(breakfast.prepare());
console.log(breakfast.isFresh(3));
console.log(breakfast.isFresh(0));
console.log(breakfast.aDayPasses());


// Do not edit below this line
module.exports = Food;
