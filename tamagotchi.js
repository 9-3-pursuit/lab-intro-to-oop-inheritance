// Create class below
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet () {
        console.log(`Hello, I'm ${this.name}`)
    }

    status () {
        console.log(`My mood is: ${this.mood}, I am this full: ${this.full}, My energy is: ${this.energy}, I am ${this.sick ? "" : "not" } sick`)
    }

    eat () {
        if (this.full >= 8) {
            this.full = 10;
            this.sick = true;
        } else {
            this.full += 2;
        }
    }

    medicate () {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
        } else {
            console.log(`refusal to take medicine`);
            this.energy--;
        }
    }

    play () {
        if (this.sick) {
            if (this.mood > 0) {
                this.mood--;
            }
            if (this.energy > 0) {
                this.energy--;
            }
        } 

        if (this.mood > 9) {
            if (this.energy > 1) {
                this.energy -= 2;
            } else {
                this.energy = 0;
            }
            if (this.full > 0) {
                this.full--;
            }
        }

        if (this.energy <= 3) {
            console.log(`I am too tired to play`);
            if (this.energy > 0) {
                this.energy--;
            }
        }

    }
}

const tamagotchi = new Tamagotchi(`Keeanu`)
tamagotchi.greet();
tamagotchi.status();
tamagotchi.eat();
tamagotchi.medicate();
tamagotchi.play();

// Do not edit below this line
module.exports = Tamagotchi;
