class User { // sugar syntax class의 본질은 생성자이다. // 와플의 틀 // 추상적인것
    constructor(userName) { // 생성자(parameter) 생성자의 파라미터는 객체를 구분시켜준다.
        this.userName = userName
    }

    sayHi() {
        console.log(`Hi, I am ${this.userName}.`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

// User('john) class에서는 불가능

class Animal {
    constructor() {
        this.animalName = 'animal'
    }

    run() {
        console.log(`${this.animalName} run.`)
    }

    stop() {
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

//
function makeClass(phrase) { //factory function : class를 리턴 앞챕터에서는 객체를 리턴
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()