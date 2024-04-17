class A {}

class B extends A {}

let a = new A()
let b = new B()

// javascript에서 모든 객체는 n개의 타입을 가지고 있고 그중하나는 Object type이다.
console.log(a instanceof A, a instanceof B, a instanceof Object) 
console.log(b instanceof A, b instanceof B, b instanceof Object)

console.log(typeof a, typeof b)
console.log(typeof A, typeof B) // 클래스는 생성자가 베이스이기때문에 function type으로 나온다.
