let obj = {} // plain object // new Object() = {}(브리킷) 과 동일한의미 즉 Object객체의 생성자를 node.js가 생성해준것.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype) // 이게 핵심.

obj = new Object()
console.log(obj.__proto__)
console.log('Object: ', Object.prototype.__proto__) // null

console.log('obj: ', obj.toString())

//
let arr1 = [1, 2] // 위 아래는 같은 표현
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log('Array: ', Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

//
let one = new Number(1)
console.log(one.toString())

//
function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())
