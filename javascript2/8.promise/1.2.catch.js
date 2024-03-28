let promise = new Promise((resolve, reject) => // 2,  Promise는 예약객체이다.
    setTimeout(() => reject('hello'), 1000))

promise.catch(result => console.log(result)) // 3, Promise가 거부(reject)되었을때 실행되는 콜백함수 

console.log(promise) //1, Promise { <peding> }

setTimeout(() => console.log(promise), 1100) // 4, Promise { <rejected> 'hello' } , queue에 등록

//
promise = new Promise((resolve, reject) => // excuter로 promise에 등록
    setTimeout(() => reject(new Error('world')), 2000)) // 약속이행 완료

promise.then(result => console.log(1), // resolve 일때
             result => console.log(result)) // reject일때

//
promise = new Promise((resolve, reject) => 
    setTimeout(() => {throw new Error('king')}, 3000)) // throw 는 명령어이므로 {} 둘러싸야한다.
// throw가 실행될때 앱은 멈추게되고 error 구문은 node.js가 넣어준것.