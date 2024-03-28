class Animal {
    constructor(animalName) {
        this.animalName = animalName
    }

    run(speed) {
        this.speed = speed
        console.log(this.animalName, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.animalName, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)

//
class Rabbit extends Animal {
    constructor(animalName, color) {
        super(animalName)
        this.color = color
    }

    stop() {
        super.stop()
        this.color = color
    }

    hide() {
        console.log(this.color, this.animalName, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit','black')
console.log(rabbit)

console.log(rabbit.animalName)
rabbit.run(100)
rabbit.hide()