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
        this.energy = this.energy - 1
        if (this.full > 10) {
            this.sick = true
        }
    }
    medicate() {
        if (this.sick) {
            this.full = 9
            this.energy = this.energy - 3
            this.sick = false
        } else {
            this.energy--
            console.log(`refusal to take medicine`)
        }
    }
    play() {
        if (this.sick) {
            this.mood--;
            this.energy--;

        } else if
            (this.mood > 9) {
            this.energy = this.energy - 2;
            this.full--;

        } else if (this.energy <= 3) {
            console.log("I am too tired to play");
            this.energy--;

        } else {
            this.mood = this.mood + 2
            this.energy--
            this.full--
        }
    }

    sleep() {
        this.energy = this.energy + 4
        this.full = this.full - 3

    }
    timePasses() {
        if (!this.sick) {
            this.mood = this.mood - 2
            this.full--
            this.energy--

        } else {
            this.sick
            this.mood = this.mood - 3
            this.full = this.full - 2
            this.energy = this.energy - 2
        }
    }
    badGuardian() {
        if (this.energy <= 0) {
            this.rehomed = true
        }
        if (this.full <= 0 || this.mood <= 0) {
            this.rehomed
        }
        if (this.rehomed) {
            console.log(`${this.name} has been rehomed`)
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
