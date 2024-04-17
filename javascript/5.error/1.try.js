let json = '{"userName": "john", "age": 30}'  //json은 key에 "" (double quetation)을 사용해야한다는 차이점이있다.
let user = JSON.parse(json)
console.log (typeof json, typeof user)

json = '{age: 30}'  // token
// JSON.parse(json)

try { // 거짓데이터로 오류가 날 확률이 있다 싶으면 try로 해당 구문을 감싸라.
    JSON.parse(json)
} catch { // ERROR 가 발생했을때 작동되는 코드
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack) // stack : 알고리즘 이름, 접시쌓기라는 의미 : 가장최근데이터가 맨위에, 반대개념이 q
}