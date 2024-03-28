/** string  */
let fod = "I am a string" // foo 라는 변수를 선언.
foo = 'So am I'
foo = `back tick`

foo = 'He said, "javascript is awesome'
foo = "He said, 'javascript is awesome'"
foo = "He said, \"javascript is awesome\""

/** number (int, float) */
foo = 1
foo = 1.0

console.log( 1 / 0 ) // Infinity : 양의 무한대
console.log('a' / 1) // NaN : Not a Number (데이터)

foo = 1
console.log(isFinite(foo)) // isFinite : 유한한 숫자이면 true, 무한한 숫자 또는 숫자가 아니면 false
foo = 'a'
console.log(isFinite(foo))
console.log("여기야")

foo = '1'
//과제: parseInt return value 가 number 임을 확인하는 expression을 작성하라.
console.log(parseInt(foo) + 1)

foo = '1'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123' // "-" 하이푼의 경우 Number 타입으로 변환이 불가능하다.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo)) // 정수 출력
console.log(parseFloat(foo)) // 실수 출력

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN // NaN
console.log(a)

foo = 1n

/** boolean */
const okay = true
const fail = false

let val = null

let val2
console.log(val2)
val2 = undefined

let id = Symbol('id')
console.log(typeof id)

/** casting */
val = 1
val = String(val)

// 과제: val이 string type 임을 확인하라.
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true // 0 / 1 로 계산한다.
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false)) // '' -> empty String ' ' -> space
console.log(Number('a'), Number(undefined), Number(NaN)) // NaN : Not a Number (데이터)

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // Boolean은 뭔가 데이터가 있다 그러면 True.
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))
