function sayHi() {
    console.log('Hi')
}
//sayHi()
setTimeout(sayHi, 1000)


//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)