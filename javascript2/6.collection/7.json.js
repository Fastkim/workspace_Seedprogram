/* serializing : 3차원의 객체를 1차원 string으로 변환하는 작업 */
let user = {
    userName: 'kelly',
    age: 30,
    isAdmin: false,
    course: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)
console.log(json, typeof json)

//
user = {
    userName: 'jessie',
    room: {
        roomNumber: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}
console.log(JSON.stringify(user)) // 메서드, symbol 키, undefined는 무시되었다.

//
let room = {
    roomNumber: 23
}

let meetup = {
    title: 'conference',
    room //constructor(생성자)에 나옴, room = room과 같은 의미, 가독성을 위해 room만 사용, 객체를 key,value로 사용
}

console.log(JSON.stringify(meetup))

room.toJSON = function() {return this.roomNumber}
let s = JSON.stringify(meetup)
console.log(s)

/** parsing */
user = JSON.parse(json) // String을 다시 객체로 변환
console.log(user)
console.log(typeof user)