let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}`)
}

greet()

// call : call해주는거고 bind : return해준다.
let fn = greet.bind(user)
fn() // function 이다.

// setTimeout(fn, 100)

//
user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}`)
    }
}

fn = user.greet.bind(user) // bind는 function을 만들어 return한다.
// setTimeout(fn, 200)

// 과제: greet 과 fn 이 같은 하나인지를 확인하라.
console.log(fn == user.greet)
let fn2 = user.greet // 이 코드의 경우 오로지 21번째줄만을 의미한다. this객체를 찾지못한다.
console.log(fn)
console.log(user.greet)
user.greet()
fn2()
fn()
