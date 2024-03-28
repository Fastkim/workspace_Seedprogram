let arr = ['ilya', 'kantor']
let [firstName, lastName] = arr
console.log(firstName, lastName)

let [one, two] = [1, 2, 3] // 할당하는쪽에서 overflow할 경우 무시, queue 알고리즘 작동
console.log(one, two)

let [three, four] = [3] // 할당하는쪽에서 부족할경우 undefined 표시
console.log(three, four)

let [one2, , three2] = [1, 2, 3] // 중간 빼기
console.log(one2, three2)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
arr = s.split(' ') // token : 조각 하나하나를 의미 s.split(나누는 기준)
console.log(arr)

let [a2, b2] = arr
console.log(a2, b2)

//
let user = {
    userName: 'oscar',
    age: 6
}

let entries = Object.entries(user)
console.log(entries) // 배열안에 배열, 2차원 array

for(let [key , val] of entries) // of는 value를 뽑음
    console.log(key, val)

//
let guest = 'jane'
let admin = 'pete'; // 세미콜론으로 끊어줘야 다음 코드를 인식

[guest, admin] = [admin, guest]
console.log(guest, admin)

//
let [x, y, ...rest] = [1, 2, 3, 4] // rest의 경우 배열로 반환
console.log(x, y, rest)

//
let [x2, y2=10] = [1] // input 값이 없을경우 " = defalut"
console.log(x2, y2)

/** pattern */
let options = {
    title: 'menu',
    height: 100,
    width: 200
}

let {title, height, width} = options // 순서대로 객체의 value return
console.log(title, height, width);

({title, width, height} = options) // 순서에 맞추지않고 destructing 하는방법, 단 key와 variable name을 일치
console.log(title, height, width)

let {width: w, height: h} = options // key에 variable을 할당.
console.log(w, h)

let {title: t, ...other} = options // rest 사용
console.log(t, other)

let {title:subject, wide=10} = options // 해당값이 없을 경우 default 값 설정
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

// 과제: bread에서 size와 items를 뽑아내라.
let {size, items} = bread
console.log(size, items) // {width: 100, height: 200} ['cake', 'donut']

// 객체를 variable화 하는것.
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: t, items:[i1, i2]}) { // 객체안의 pattern을 파라미터로 사용
    console.log(t, i1, i2)
}

showMenu(menu)