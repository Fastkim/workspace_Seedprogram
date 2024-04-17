/** symbol: unique */
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id, id1, id2)
// 객체.동사(id, id1, id2) => 메서드, 객체지향
// 동사(id, id1, id2) => 절차지향

// 과제: id1, id2가 같은 지 여부를 판단하라.
console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)

console.log(id.description, id1.description, id2.description) // description

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1  // String 타입
user[userId] = 2 // Symbol 타입
console.log(user)

console.log(Object.keys(user)) // Symbol 타입을 숨김.

// Symbol : 유일한 감추는 키를 만들고 싶을때 사용한다.
// 과제: user 객체를 iterating(Collection에서 값을 하나씩 뽑는걸 말한다.)해서, key들을 출력하라.
for(let key in user) console.log(key)

/* global Symbol : for를 이용해 만든 Symbol */
id1 = Symbol.for('regNo')
id2 = Symbol.for('regNo')
console.log(id1 == id2)

id1 = Symbol.for('regNo')  // global scope Symbol
id2 = Symbol('regNo')      // local scope Symbol, 키가 없음.
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))