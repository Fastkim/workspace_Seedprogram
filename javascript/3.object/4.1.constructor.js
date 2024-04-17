/** factory function : 동일한 객체를 반복적으로 생산 */
let makeUser = function(userName, age) {
    return {
        userName: userName,
        age: age
    }
}

makeUser = function(userName, age) {
    return {
        userName,
        age
    }
}

console.log(makeUser('doris', 70))

function User(userName) { // key,entry,property
    // this = {} // 로컬 scope 객체 생성이 끝나면 사라진다.
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}.`)
    return this // 객체를 리턴하고 싶은것이다. 사과상자, 배상자
}

user1 = new User('bob') // 생성자를 콜할때는 new 연산자로 콜을 해야한다.
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

// object도 데이터타입이다.

// literal object : 1회용, 생성자 object : n회용
// 생성자 객체는 new를 생성할때 호출한다.
// 객체는 주소로 구분할 수 있다, 개발자 : variable name으로 구분, user || 개발자 : property로 구분

let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

let human = new function() { // new를 선언할때 this = {} 라는 객체가 node.js에 의해 자동으로 생성된다.
    this.humanName = 'meg' // this는 생성자 객체를 의미한다.
    this.age = 27
    // return this 생략되어있다.
}
console.log(typeof human, human.humanName)

//
function BigUser() {
    this.userName = 'amy'
    return {userName: 'beth'} // this가 아닌 다른걸 리턴할때 (생성자가 아닌 평범한 function일때)
}

function SmallUser() {
    //this = {}
    this.userName = 'lorie'
}

console.log(new BigUser().userName, new SmallUser().userName) // return 뒤에 this이냐 다른거냐에 따라 선택적 return이 가능 

//과제 : new를 하지 않아도 앱이 살도록 고쳐라. (optional chaining)
console.log(BigUser().userName, SmallUser()?.userName)
// 어느객체의 userName인가? 'beth' 객체의 userName
// new 연산자가 없으면 생성자가 아니게 되므로 this 객체가 생성되지 않는다. 따라서 return this가 불가능하다.

//
const user = new Object() // plain object(깨끗한 상태의 객체) 생성
// 과제: user object에 12살을 넣어라.
user.age = 12
console.log(user)


/* view object : 창문역할을 하는 object, view object 보안상의 이유로 사용한다. */
const person = Object.create(user) // person : view object, Object.create()로 view object를 선언
console.log(person == user) // false
console.log(user)
console.log(person) // age : 12가 보이지 않도록 감춰짐
console.log(person.age) 
console.log(person == user)

person.personName = 'mandarin'
console.log(user) // person => user (읽기 가능), user => person (읽기 불가능)
console.log(person)