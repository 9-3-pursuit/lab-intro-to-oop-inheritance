// Create class below
class Food {
    constructor(name, daysToSpoil, isFresh=true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.isFresh = isFresh;
    }
    prepare(){
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.isFresh} days left before ${this.name} spoils.`)
        }else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh();
    }
    
}
// Do not edit below this line
module.exports = Food;
