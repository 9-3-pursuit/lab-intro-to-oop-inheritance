// Create class below
class Tamagotchi {
    constructor(name, mood = 6, full = 8, energy = 9, sick = false, rehomed = false) {
        this.name = name;
        this.mood = mood;
        this.full = full;
        this.energy = energy;
        this.sick = sick;
        this.rehomed = rehomed;

    }
    greet() {
        console.log(`Hello, I'm ${this.name}`)
    }
    status() {
        { `My mood is: ${this.mood} /n I am this full: ${this.full} /n My energy is ${this.energy}` }
        if (this.sick) {
            console.log(`I am not sick`)
        } else {
            console.log(`I am not sick`)
        }
    }
    eat() {
        this.full = this.full + 2
        this.energy = this.engery - 1



    }
    medicate() {
    }
    play() {
    }
    sleep() {
    }
    timePasses() {
    }
    badGuardian() {
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
