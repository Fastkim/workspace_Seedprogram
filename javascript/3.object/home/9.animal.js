/* 과제9:
<life>
name   이렇게 쓰면 안되지만 userName이 아닌 그냥 name
eat()
excrete()

<animal>
name
move()

<bird>      <mamal>
name          name
move()        move()
---

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()
---

[결과]
bird eat.
bird excrete.
bird fly.

mammal eat.
mammal excrete.
mammal run.
*/

let life = { 
    name : 'life',
    eat() {
        console.log(`${this.name} eat.`)
    } ,
    excrete() {
        console.log(`${this.name} excrete.`)
    }
}

let animal = {
    name : 'animal',
    move() {},
    __proto__: life 
}

let bird = {
    name : 'bird',
    move() { 
        console.log(`${this.name} fly.`) 
    },
    __proto__: life 
}

let mammal = {
    name : 'mammal',
    move() { 
        console.log(`${this.name} mammal run.`) 
    },
    __proto__: life 
}

bird.eat()
bird.excrete()
bird.move()
console.log()
mammal.eat()
mammal.excrete()
mammal.move()