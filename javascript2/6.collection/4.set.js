// set 메서드는 데이터중복을 제거하고 유일한 값들로 데이터들을 관리하는 메서드이다.
let set = new Set()

let user1 = {userName: 'john'}
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1) // map, array는 키만 유일하면 value가 중복되어도 괜찮다. set은 value만 있으므로 중복을허용x
console.log(set)

//
console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({})) // has는 boolean 리턴

//
console.log(set.delete(user1))
console.log(set)

/** iterating */
set.add(user1)

// for(let user of set) console.log(user)

// 과제: .forEach()로 iterating해서 user들을 출력하라.

set.forEach(value => console.log(value)) // set은 key와 value가 합쳐져있는것이다.

//
set = new Set([1, 2, 3])
console.log(set)

// String -> set으로
set = new Set('hello') // Set의 경우 중복이 불가하다.
console.log(set)

/* set -> array */
let arr = Array.from(set)
console.log(arr)