const age = 16
// 앱이 작동하면 global le(lexical environment) 가 작동된다.
// sayAge()  sayAge is not a function
// tellAge() tellAge is not defined

// console.log(sayAge) undefined
{ // just block : 부모의 주소값을 저장하고 있다. 자식le

    let age = 10 

    // closure : 부모 자식 le을 연결하는 함수들을 의미한다. 
    function sayAge() { // function declation : global le에 생성된다, 단 내부값은 생성되지 않음. node.js는 function도 객체로 취급 
        console.log(age) // 출신지는 global scope
        //[[Environment : property -> 태어난 function의 고향주소를 가지고있다. ]]
    }

    let tellAge = function() {
        console.log(age) // 출신지는 별 scope
    }
    sayAge() // le 생성(outer)
    tellAge() // le 생성(outer)
} // 더이상 실행코드가 없지만 global le의 sayAge가 주소값을 가지고 있으므로 le는 안사라짐.

sayAge() 
// tellAge() 루트기준(global le) 자식한테 있지만 참조는 자기보다 상위객체만을 한다.