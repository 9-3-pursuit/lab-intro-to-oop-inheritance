// Create class below
class Food {
    constructor(name, daysToSpoil, fresh = true){
    this.name = name; 
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
    }
    prepare(){
    console.log(`${this.name} is being prepared`)
    } 
    isFresh(){ 
        if(this.daysToSpoil <= 0){
            this.fresh = false
        } else{
            this.fresh = true
        }

        if(this.fresh === true){
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    }
      else  {
        console.log(`${this.name} has spoiled.`)
    }
    }


aDayPasses(){
    if(this.daysToSpoil > 0 ){
        // this.daysToSpoil = this.daysToSpoil -1
        // this.daysToSpoil -= 1
        this.daysToSpoil -- 
    }
   this.isFresh()
    // if(this.daysToSpoil === 0) {
    //     this.fresh = false
    // }
}






}
// Do not edit below this line
module.exports = Food;


let x = new Food(`tacos`, 2)


x.prepare()
x.isFresh() 
x.aDayPasses()
x.aDayPasses()

