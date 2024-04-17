function sayHi() {
    console.log('Hi')
}
//sayHi()
setTimeout(sayHi, 1000)


//
function greet(phrase, who) {
    console.log(phrase,who)
}

setTimeout(greet, 2000, 'hello', 'knox') // 앱이 동작하고 정해진 시간이후 작동하도록 하는 함수

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)