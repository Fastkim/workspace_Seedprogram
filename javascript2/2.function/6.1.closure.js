const age = 16
// 앱이 작동하면 global le(lexical environmnet)가 실행된다.
// sayAge() sayAge is not a function
// tellAge() tellAge is not defined

// console.log(sayAge) undefined
{ // just block : 부모의 주소값을 저장하고 있다. 자식 le

    let age = 10

    // closure : closure는 외부 variable을 기억하고 접근할 수 있는 function 이다.									
    function sayAge() { // function declaration : global le에 생성된다. javascript는 function도 객체로 취급
        console.log(age) // 출신지는 global scope (호이스팅으로 맨위에서 interpreter에 처음으로 해석됨.)
        // [[Environment : property -> 태어난 function의 고향주소를 가지고 있다. ]]
    }
    
    let tellAge = function() { // Expreesion Function
        console.log(age) // 출신지는 별 scope
    }
    sayAge() // le 생성(outer) 호출했을때 sayAge function의 environment가 생성됨.
    tellAge() // le 생성(outer)
} // 더이상 실행코드가 없지만 global le의 sayAge가 주소값을 가지고 있으므로 le는 안사라짐.

sayAge()
// tellAge() 루트기준(global le) 자식한테 있지만 참조는 자기보다 상위객체만을 한다.

// le = lexical environment : 내부에 숨겨져있는 연관객체로 서로 다른 수준의 scope의 관계형성을 돕는다.
// 블록,함수, 스크립트 전체는 내부에 숨겨져있는 연관객체인 lexical environment를 가진다.