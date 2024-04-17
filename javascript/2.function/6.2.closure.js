const age = 16

// sayAge() sayAge is not defined
// tellAge() tellAge is not defined

function init() { //function block : 로컬scope는 함수 init()을 콜했을때 le(블록이 실행)가 생성된다.
    let age = 10

    function sayAge() { // function declation 
        console.log(age)
    }
 
    let tellAge = function() { //  function expresion
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()
// sayAge() sayAge is not defined
// tellAge() tellAge is not defined