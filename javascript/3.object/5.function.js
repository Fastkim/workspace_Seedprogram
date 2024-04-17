function sayHi(myName, ...jobs) { // rest parameter는 length에 포함하지않음. function이 object인 개념은 javascript에서만이다.
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) // function 타입의 객체. node.js에서 기본적으로 name이라는 property를 저장해놓았다.
console.log(sayHi.length)

let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function() {
    console.log('hi')
    sayHi.count++
}

// 과제: sayHI object에 count property를 넣어라.

sayHi.count = 0
sayHi()
console.log(`call count: ${sayHi.count}`)


// function factorial (n) {
//     if (n <= 1) return 1
//     else return n * factorial(n - 1)
// }

// console.log(factorial(5))