function greet() { // Function 선언
    console.log('hello')
}

greet() // Function 콜

let salute = function() {
    console.log('hi')
}

salute() 
console.log(salute)

let sayHello = function(user, greeting) { //user, greeting은 블럭 내부에서만 선언된 variable 벗어나면 사라짐.
    return `${greeting}, ${user}`
}
console.log(sayHello('rebecca', 'hello'))


// 변수 콜 = Funtion 콜

// 위에 두개 다 같은 의미.

// 과제: HI 라고 인사하는 function을 정의하고, 실행하라. (확장성을 추가하자)

/*
 * let sayHi = function(greeting) {
 *     console.log(greeting)
 * }
 */

// let sayHi = function(greeting) {
//     return `${greeting}`
// } 

// console.log(sayHi('HI')) // 내정답

// const로도 가능 function 내부 variable은 변하지 않기때문에.. 파라미터만 바뀜.
const sayHi = function(greeting) { 
    console.log(greeting)
}

// Function도 Data이다.
// BigData의 경우 가만히 있고 function이 돌아다닌다. (이 의도가 담긴게 lambda 문법)
const say = sayHi

sayHi('안녕') // 안녕
say('HI')     // HI

//
let shout = function () {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

(function() {
    console.log('earth')
}) ()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)


let showMsg = function(from, msg='no message' ) {
    console.log(`${from}: ${msg}`)
}
// ='no message' undefine 대신에 default값을 설정

showMsg('trinity', 'follow rabbit')
showMsg('trinity') // js에서는 가능하네. 자바는 안됐던걸로 아는데 ㅋ







