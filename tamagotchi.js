// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet() {
        console.log('Hello, I\'m ' + this.name + '!');
    }

    status() {
        console.log(
            'Energy: ' + this.energy + ', ' +
            'Full: ' + this.full + ', ' +
            'Mood: ' + this.mood + ', ' +
            'Sick: ' + this.sick
        );
    }

    eat() {
        this.full += 2;
        this.energy -= 1;
        if (this.full > 10) {
            this.sick = true;
        }
    }

    medicate() {
        if (this.sick) {
            this.full = 9;
            this.energy -= 3;
            this.sick = false; // Ensure the Tamagotchi is healed
        } else {
            console.log('I do not need medicine!');
            this.energy -= 1;
        }
    }

    play() {
        if (this.sick || this.mood >= 9 || this.energy <= 3) {
            console.log('I am too tired to play');
            this.energy -= 1;
        } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
        }
    }

    sleep() {
        this.energy += 4;
        this.full -= 3;
    }

    timePasses() {
        if (this.sick) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        } else {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
    }

    badGuardian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            console.log('The Tamagotchi has been rehomed!');
            this.rehomed = true;
        }
    }
}

module.exports = Tamagotchi;
