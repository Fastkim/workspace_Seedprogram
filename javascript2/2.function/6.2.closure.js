const age = 16

// sayAge() sayAge is not defined
// tellAge() tellAge is not defined

function init() { //function block : 로컬scope는 함수 init()을 콜했을때 le(블록이 실행)기 생성된다.
    let age = 10

    function sayAge() { // function declaration
        console.log(age)
    }

    let tellAge = function() { // function expreesions
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()
// sayAge() sayAge is not defined
// tellAge() tellAge is not defined