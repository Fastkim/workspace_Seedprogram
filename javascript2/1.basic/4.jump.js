if(true) {}

if(false) {} else {} // exclusive (배타적인) 관계

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')}

/** ternary(삼항연산자) */
let s = true ? 1 : 0
console.log(s)
//과제 : 위 코드를 if로 표현하라.
if(true) {
    s=1
} else {
    s=0
}
console.log(s) // 1

/** switch */
let val

switch('baz') {
    case 'bar' : val = 'bar'; break /** baz case로 건너띄어서 쭉 아래로 읽는다. break를 통해 exclusive(배타적)으로 만들 수 있음  */
    case 'baz' : val = 'baz'; break
    default: val = 'all right'
}

console.log(val)