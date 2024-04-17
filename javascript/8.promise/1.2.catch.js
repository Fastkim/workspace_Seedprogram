let promise = new Promise((resolve, reject) =>  //2
    setTimeout(() => reject('hello'), 1000))

promise.catch(result => console.log(result)) // 3 , hello , catch handler => promise가 실패했을때 작동되는 구문

console.log(promise) //1 , Promise { <pending> } 

setTimeout(() => console.log(promise), 1100) // 4 , Promise { <rejected> 'hello' } , queue에 등록

//
promise = new Promise((resolve, reject) => // excuter로 promise에 등록
    setTimeout(() => reject(new Error('world')), 2000)) // 약속이행 완료

promise.then(result => console.log(1), // resolve일때
             result => console.log(result)) // reject일때

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => {throw new Error('king')}, 3000))  //throw 는 명령어이므로 {} 둘러싸야한다.
// throw가 실행될때 앱은 멈추게되고 error 구문은 node.js가 넣어준것.

// promise.catch(console.log) // function을 콜한것이 아니라 넣어준것.