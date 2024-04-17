let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4) 

console.log(date1 - date2) // 86,400 * 1000(s) 하루를 나타내는 초

let user = { // object를 'string'으로 변환하는 과정
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // node.js가 hint를 통해서 판단하여 return 하는것이다.
        return hint == 'string' ? this.userName : this.age
    }
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive](){
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString() {
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

/* 우선순위
1. object[Symbol.toPrimitive(hint)
2. X, hint=='string', toString(), valueof()
3. X, hint=='number || default', valueof(), toString()
*/

userStr = JSON.stringify(user) // JSON의 경우 생성자의 이름이 출력되지 않는다.
console.log(userStr)