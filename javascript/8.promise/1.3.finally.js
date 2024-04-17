let promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(10), 1000))

promise.then(console.log(1)).then(console.log(2)) // resolve 됐을때 작동할 구문, chaning 이용

promise.then(result => {
    console.log(result)
    return ++result // generator에서 경험, 값을 증가시킨 다음에 return
}).then(result => {
    console.log(result)
    return ++result
}).then(console.log)

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve('complete'), 2000))

promise.then(console.log)
    .catch(e => console.log(e.message))     // 에러가 발생했을때 작동할 handler
    .finally(() => console.log('finally'))  // 성공,에러 둘다 작동하는 handdler

