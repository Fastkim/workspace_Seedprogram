/** object literal */

// object 의 장점 : property를 묶음으로 표현할 수 있음.

let user = { // object로 만들기위해 블록안에 가둔다. variable을 객체의 이름으로 사용 
    userName: 'frances', // String type, 키(property name) : property(동적인 속성) value
    age: 70 // numbertype
}

user = {
    userName: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face', // 권장하지는 않지만 single quotation으로 스페이스 포함해서 property 생성 가능
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
}

/** read property */
// 할당연산자가 없으므로(write) read하는 작업이라고 판단.
// user. : user라는 이름의 object를 찾아가라
// . : object에만 사용, literal에는 불가능
// objecct / literal(String,number,boolean)은 상충되는 개념

console.log(user.userName)
console.log(user.userName.first)
user.sing()

//user.'nick name'
console.log(user['nick name'])
console.log(user['userName']['first'])

/** write property */
user.userName.first = 'john'
user['age'] = 50
console.group(user.userName.first, user.age)

// property 변수를 활용해 read하기.
let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = { // property name(key)으로 넘버타입은 권장하지않는다.
    manName: 'samuel',
    1: 'one',
    2: 'two'
}

console.log(man['1'])