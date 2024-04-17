let userName = 'neo'
sayHi()

function sayHi() { // Function declaration
    console.log('Hi', userName)
}

sayHi()

// sayHello()

// function expression
const sayHello = function() {
    console.log('Hello', userName)
}

sayHello()