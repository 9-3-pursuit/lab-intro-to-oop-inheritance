// Create class below
class Tamagotchi{
    constructor(name,energy=9,full=9,mood=6,sick=false,rehomed=false){
        this.name=name;
        this.energy=energy;
        this.full=full;
        this.mood=mood;
        this.sick=sick;
        this.rehomed=rehomed;
    }
    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }
    status(){
        console.log(`My mood is: ${this.mood} \nI am this full: ${this.full} \nMy energy is: ${this.energy} \nI am not sick`)
    }
    eat(){
        this.full + 2
        this.energy - 1
        if(this.full > 10){
         return   this.sick = true
        }
    }
    medicate(){
        if(this.sick = true){
            this.full = 9
            this.energy - 3
        }else{
            console.log("refusal to take medicine");
            this.energy - 1
        }
    }
    play(){
        if(this.sick = false){
            this.mood + 2
            this.energy - 1
            this.full - 1
        }
        if (this.sick = true){
            this.mood - 1;
            this.energy - 1;
        }
        if (this.mood > 9){
            this.energy - 2;
            this.full - 1;
        }
        if(this.energy <= 3){
            console.log("I am too tired to play");
            this.energy - 1;
        }

    }
    sleep(){
        this.energy + 4;
        this.full - 3;
    }
    timePasses(){
        if(this.sick = false){
            this.mood - 2
            this.full -1
            this.energy - 1
        } else if(this.sick = true){
            this.mood - 3;
            this.full - 2;
            this.energy - 2;
        }
    }
    badGuardian(){
        console.log("tamagotchi has been rehomed");
        if(this.energy <= 0){
            this.rehomed = true;
        } if(this.mood <= 0){
            this.rehomed= true;
        } if(this.full <= 0){
            this.rehomed = true;
        }
    }
}

let betty = new Tamagotchi("Betty",9,9,6,false,false);


console.log(betty.status())


// Do not edit below this line
module.exports = Tamagotchi;
