// Array 객체에는 다양한타입의 데이터들이 원소로 포함될 수 있다.
let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr) // array는 collection이다. array는 주머니역할을 하는 객체이다.

arr = [null, undefined, NaN]
console.log(arr)

//arr[1]은 빈자리로 두었다.
arr = []
arr[0] = 'a' // array는 index를 객체의 key처럼 사용한다.
arr[2] = 'c'

console.log(arr)
console.log(arr[0]) // String 0 으로 반환된다.
console.log(arr[1])

console.log(arr.length) // empty item도 공간을 차지하고 있다.

// collection에서 2차원의 형태를 matrix라고 한다.
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2] // 생성자 parameter로 넣은것이다. let a = new Array(1, 2)
let b = [2, 3]
let c = a.concat(b) // 합집합 sql의 union all 같네
console.log(c)

/** stack: FILO(First In Last Out) == LIFO(Last In First Out) FILO와 LIFO는 같은뜻, 관점의 차이일뿐 */
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop()) // arr 원소 추출, 가장 마지막에 들어간 push가 추출되었다. 
console.log(arr) //pop()은 write중 delete인 함수이다.

// array로 stack을 구현한다면 메서드 pop,push를 사용하면된다.

/** queue: FIFO == LILO : 줄서기 */
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // arr 원소 추출, 가장 먼저 들어간 push(1)가 추출되었다.
console.log(arr) //shift()은 write중 delete인 함수이다.

//
arr = [1, 2, 3]
arr.reverse() // 정렬의 순서를 바꾸는 메서드
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1) // slice(index: 시작위치) : 해당인덱스 직전까지 잘라내어라. (즉, 해당인덱스는 포함x)
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4) // splice(시작위치index, length: 원소갯수[생략시 array 끝원소까지], ... 넣을 value)
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b')) // 'b'의 원소를 갖고있는 인덱스번호를 return

arr.splice(arr.indexOf('b'))
console.log(arr)
// slice, splice 차이점 : read(arr값을 안건드림), write(arr값을 건드림 => 삭제를한다.), 모달창을 띄워서 삭제를 물어보기로 했었다.

arr = ['a', 'b', 'c']
//과제: splice()로 arr 에서 'b'만을 삭제하라.
arr.splice(arr.indexOf('b'),1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() // sort()는 arr을 write 하고있다.
console.log(arr, s) // s가 arr의 view object 이지 않을까?
// 과제: s가 view object 인지를 확인하라. view object은 추가도 된다.
console.log(s == arr)

arr = [8, 11, 22, 23, 9]
arr = ['8', '11', '22', '23', '9']
console.log(arr)
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b)) // 오름차순
console.log(arr.sort((a, b) => b - a)) // 내림차순

/** iterating */
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

for(let e of arr) console.log(e) // e(element) 가독성이 좋으므로 이 방법 추천

// 과제: value 틀을 출력하라.
for(let key in arr) console.log(arr[key])
console.log('여기')

/** forEach() */
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

console.log()
arr.forEach(print) // function도 데이터이고 그게 callback이다.

arr.forEach(print2)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) // map은 read 메서드
console.log(arr, arr2, arr == arr2)

// namespace
let group = {
    title: 'art',
    student: ['winston', 'cal', 'maritha'],
    list() {
        this.student.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()

/** array -> string */
arr = ['hello', 'world', 2]
let greeting = arr.join() // 구분기호를 결정해서 return함
console.log(greeting, typeof greeting)

console.log(arr.join('/'))
// helloworld2
console.log(arr.join('')) // emptyString

//
arr = [1, 2, 3]
str = arr.toString() // array prototype에 있는 toString
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str = JSON.stringify(arr)
console.log(str, typeof str)

const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book') // 처음발견한 조건에 맞는 데이터만을 반환(1개)
console.log(item)

const interest = items.filter((item) => item.itemName == 'book') // 조건에 맞는 데이터 n개를 array 타입으로 return 한다.
console.log(interest)

const elements = items.map((item) =>
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

const totalPrice = items.reduce((total, item) => {
            total += item.price
            return total
        }, 0)  // reduce(, 0(total의 초기값))
console.log(totalPrice)

//
let isExit = items.some(item => item.itemName == 'book') // or 개념
isExit = items.every(item => item.itemName == 'book') // and 개념
console.log(isExit)
