let animal = {
    isAlive: true
}

function Rabbit(rabbitName) {
    // prototype 이라는 hidden property
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) // .은 주어객체를 찾아감.
//
Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

//
function Duck(duckName) {
    this.duckName = duckName
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__) // 과거에는 객체의 prototype에 접근하기 위해 << 왼쪽의 방법을 사용했음.
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')


