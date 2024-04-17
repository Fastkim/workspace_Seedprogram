/* 과제1:
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다.
2. parameter value 들은 모두 string type 이다.
3. 연산자는 -, *, / 로 한정한다.
4. client가 연산자를 안 정하면, * 을 연산자로 쓴다.
5. 연산 결과를 return 한다.
*/
// 강사님 풀이
// variable name은 사전에 있는 단어를 먼저 사용하고 없을경우 창조.
// let calculate = function(a, b, op='*' ) {
//     let result

//     switch(op) {
//         case '-': result = a - b; break
//         case '*': result = a * b; break
//         case '/': result = a / b
//     }

//     return result
// }


// console.log(calculate('1', '2', '-'))
// console.log(calculate('2', '2'))


// 기계부품으로 나누어서 조립한다고 생각하자.
let minus = function(a,b) {
    return a - b
}

let multiply = function(a,b) {
    return a * b
     
}

let division = function(a,b) {
    return a / b
}

let calculate = function(a,b,operator=multiply) {
    return operator(a,b) // operator를 call back 하였다.
}

console.log(calculate(1,2,minus), calculate(1,2,multiply), calculate(1,2,division), calculate(1,2))

// 나의 풀이
/* 
let calculate = function(number1, number2, operator='*') {
    let result

    if(operator == '-') {
        result = number1 - number2
    } else if(operator == '*') {
        result = number1 * number2
    } else {
        result = number1 / number2
    }
    console.log(result)
}
*/


/* let calculate = function(number1, number2, operator='*'){ // 유사한코드가 반복될때는 for문보다 case문이 더 가독성이 좋다.
    let result

    switch(operator) {
        case '-' :  result = number1 - number2; break
        case '*' :  result = number1 * number2; break
        case '/' :  result = number1 / number2; //마지막 줄은 break를 사용할 필요없음
    }
    console.log(result) // return은 빠져나가서 호출한곳으로 다시 되돌아감, 주로 return variable로 사용
} */


/* calculate(2,1,'-')
calculate(2,1,'*')
calculate(2,1,'/')
calculate(2,1) */





