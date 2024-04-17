async function fn() {  //async : sync가 안맞다. 호흡이 맞다. promise는 async, sync : 1차원 , async : 2차원
    return 1 // 1은 promise 객체의 result property로 사용되고있다.
} // async 는 promise type으로 return 해준다.

let f = fn()
console.log(f)

f.then(console.log) // result값이 들어간다.

//
fn = async function() {
    return Promise.resolve(2)
}
fn().then(console.log)

//
fn = async function() {
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e.message))

/** await */
fn = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    // await 은 async 내에서만 사용가능
    let result = await promise // resolve가 실행되기전에 작동됨. promise가 완료되기까지 기다리게 하는게 await 
    console.log(result)
}
fn()

//
class Waiter {
    async order() {
        return await Promise.resolve('짜장면')
    }
}

new Waiter().order().then(console.log)

