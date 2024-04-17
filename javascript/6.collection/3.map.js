// 키(index)를 수동으로 할당할때는 map 사용
// map() 배열을 순회하며 변환된 배열을 모아 새롭게 반환하는 역할을 수행한다.
let map = new Map()

map.set('1', 'hello') //map.set(key, value), write과정
map.set(1, {userName: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true)) //map.get(key) , read과정
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) // map.has(key) : map안에 해당 key가 있는지 확인, boolean 리턴.
console.log(map.size) // Array.length()

console.log(map.delete(1), map.delete(2)) // map.delete(2) 없는키는 무시(false 반환), map.delete는 boolean을 리턴하므로, if조건문과 결합해서 사용하기 유용
console.log(map)

map.clear() // 모든 key와 value 삭제하기
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'every').set(3, 'adela') // Map<any, any> : key, value 어떤것이 와도된다. map chaning
console.log(map)

/* iterating */
let greens = new Map([   // array를 map 타입으로 casting했다.
    ['cucumber', 500],    // 각 array에는 value가 2개씩만 있어야한다. [key, value]
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens) // entry : key와 value를 포함한 array 객체를 의미한다.
    console.log(entry)

let keys = greens.keys()
    console.log(keys)

// 과제 : 위 키들을 각각 차례대로 출력하라.
for(let key in keys)
    console.log(key)

console.log(...keys) // spread 사용

let values = greens.values()
console.log(values)
for(let value of values)
    console.log(value)

greens.forEach((val, key) => console.log(key, val))

console.log("여기")
/* object -> entries -> map */
let user = {
    userName: 'aiden', // entry
    age: 50
}

let entries = Object.entries(user)
console.log(entries) // array 안에 array가 들어있다.
console.log(new Map(entries)) // object에서 map으로 casting

/* map -> object */
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

let fruits = Object.fromEntries(map) // map객체를 object로 casting
console.log(fruits)
