let user = {} // 정의된 property가 없어도 블록이 있다면 객체이다. 객체를 생성하는 과정을 'new'라고 지칭한다.

user.height = 200 // property를 add 하는 과정.
user['weight'] = 80 // property name에는 single quotation이 생략되어있다.

console.log(user.height, user.weight) // property가 없으면 undefined가 생성.

delete user.weight // weight property를 삭제하는 문법
console.log(user.weight) //undefined

console.log('height' in user) // in 연산자 : 'height 가 user객체 안에 있을때 true를 리턴.
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.userName = 'parker'
console.log(Object.keys(user)) // keys : 객체가 담고있는 property name을 String 타입 array로 리턴해준다.
console.log(Object.values(user)) // values : String or Number를 array 타입으로 리턴한다. value : 객체가 담고있는 property value을 array로 리턴해준다.
console.log(Object.entries(user)) // name, value 모두 리턴.

user = {
    greet: function() {console.log('hello')} // expressions function
}

// 과제 : 위 코드를 arrow function 으로 refactoring 하라.

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello') // declaration function
    }
}

user.greet()

/** optional chaining */
user = {}
let address = {}
address.street = 'sejong'
console.log(address.street)
user.address = address
console.log(user.address.street)
// console.log(user.city.cityName)

//chaining : 객체의 property를 꼬리에 물고 찾아가는 과정을 말한다.
let street
street = user?.city?.street // ?.(optional chaining) : 앞의 주어(variable)가 null || underfined 이면 underfined로 출력. 앱을 죽지 않게 하는게 목적.
console.log(street)

street = user?.city?.street ?? 'where' // ?(nullish coalescing operator) 'default' : underfined 대신 출력할 기본값
console.log(street)
// user?.addres = 'sejong'  // optional chaining은 write에는 불가, read만 가능

user = null
// use.greet()
console.log(user?.greet())