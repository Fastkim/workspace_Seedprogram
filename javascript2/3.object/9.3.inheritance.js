let animal = {
    animalName : 'animal'
}

animal = new Object()
animal.animalName = 'animal'

// 과제: 토끼를 object literal 및 constructor로 만들어라.
//       토끼는 age = 3 property를 갖고 있다.

let rabbit = {
    age : 3
}

rabbit = new Object()
rabbit.age = 3 

// console.log(animal.prototype) // 일반객체의 prototype은 hidden이다.
console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(rabbit.animalNamem, rabbit.age)

rabbit.__proto__ = animal
console.log(rabbit.animalName, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal // rabbit is an animal
}

rabbit.walk()

//
let user = {
    userName: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.userName)

administrator.userName = 'jonadan'
console.log(administrator.userName) // 자기 property를 먼저 뒤져보고 부모를 확인해본다.

//
animal = {
    animalName: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.animalName} eat.`) // this에는 콜했을때에 주어객체가 들어간다.
    }
}

rabbit = {
    animalName: 'rabbit',
    __proto__: animal // property에 __proto__ animal을 지칭하면서 animal - rabbit, 자식-부모 관계 형성
}

let lion = {
    animalName: 'lion',
    __proto__: animal // property에 animal을 지칭하면서 animal - rabbit, 자식 - 부모 관계 형성
}

// animal.eat(animal) parameter에 자동으로 animal이 들어가있으므로 this.animalName이 출력된다.
animal.eat()
rabbit.eat()
lion.eat()

//
console.log(Object.keys(rabbit)) // 숨김이라 노출이 안된다.
console.log()

for(let key in rabbit) // for(iterating) 구문안에 있기 때문에 본인 포함 부모까지 모두 살펴본다.
    console.log(key)

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}