let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}`)
    }
}

user1.greet() // user1 객체의 greet()라는 함수를 콜했다.
user2.greet()

//
let userName = 'morpheus'

function greet() { // 객체가 아닌 동사(메서드)만 있으므로 절차지향과정이다.
    console.log(`I am ${this.userName}`)
}

greet() // greet 함수는 생성자가 아니므로 자동으로 this 객체가 생성되지 않는다.

greet.call(user1) // this variable에 call 함수의 파라미터객체의 property 값을 넣는다.
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
// user2.greet()

// 과제: user1.greet을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)