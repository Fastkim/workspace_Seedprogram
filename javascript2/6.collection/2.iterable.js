let range = { // iterable = iterating이 가능하도록 설계 되는 객체
    from: 1,
    to: 3,
    // generator() 객체의 내부구조
    [Symbol.iterator]() { // hidden
        this.current = this.from
        return this // iterator 객체를 return
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else
            return {
                 done: true
            }
    }
}

for(let num of range)
    console.log(num)

// javascript가 업그레이드 됨에 따라 generator function이 추가되었다.
function*generator() { // generator function 
    let val = 1 // 시작값
    while(val <= 3) yield /*끝값*/  val++ // 몇번을 리턴할것인지 알면 while 대신에 for문을 사용한다.
}

for(let num of generator()) // of array를 사용했었다, object in은 key를 뽑아냈고, object of는 value를 뽑아냈다.
    console.log(num)

let g = generator() // object를 return한다. factory function도 object를 리턴.
console.log(g, ',', typeof g)
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.next()) // { value: 3, done: false }
console.log(g.next()) // { value: undefined, done: true }

//
function* gen() {
    yield 1
    yield ['a','b']
    yield function() {}
}

for(let val of gen()) // value를 뽑을때는 of를 사용
    console.log(val)

function* gen2() { // 부모 generator()
    yield* generator() // 자식 generator()
    yield* ['a', 'b']
    yield 9 // not iterating (*)
}

console.log('')

for(let val of gen2())
    console.log(val)