/** string */
let foo = "I am a string" // foo 라는 변수를 선언.
foo = 'So am I'
foo = `back tick`

foo = 'He said, "javascript is awesome"'
foo = "He said, 'javascript is awesome'"
foo = "he said, \"javascript is awesome\""

/** number (int, float) */
foo = 1
foo = 1.0

console.log( 1 / 0) // Infinity : 양의 무한대 
console.log('a' / 1) // NaN : Not a Number (숫자가 아니다.) 둘다 데이터가 있다. 현업에서는 에러라고 표현

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo)) //isFinite : bolean 타입을 반환하는 API

foo = '1'
// 과제: parseInt return value가 number 임을 확인하는 expression 작성하라.
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN // NaN이 더 쎄다.
console.log(a)

foo=1n

/** boolean */
const okay = true
const fail = false

let val = null

let val2
console.log(val2)
val2 = undefined // 초기화

let id = Symbol('id') 
console.log(typeof id) // 변수의 타입을 알려주는 API typeof

val = '6' / '2'
console.log(val)

val = false / true // 0 / 1 로 계산한다.
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false)) // '' -> empty String ' ' -> space
console.log(Number('a'), Number(undefined), Number(NaN)) // NaN : Not a Number

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // Boolean은 뭔가 데이터가 있다 그러면 True.
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))