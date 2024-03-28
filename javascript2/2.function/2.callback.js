function sayOdd(num1) {
    console.log(`${num1} is an odd number.`)
}

function sayEven(num) {
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2) {

    // let fn1 == 바깥에 있는 함수 sayOdd의 주소(파라미터).
    // parameter가 아닌 function의 이름으로 함수끼리 커넥팅되어있다. 
    const num = parseInt(Math.random() * 10) + 1 // Math.random : 0.0 이상 1.0미만 랜덤의 수를 산출
    if(num % 2 != 0) fn1(num) //callback : 파라미터로 받은 variable을 function 내부에서 콜한다. (중복제거하려고 사용)
    else fn2(num)
}

lookNum(sayOdd, sayEven) //callfront

function sayOdd2(num) {
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num) {
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef) {
    return chef(food)
}

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))