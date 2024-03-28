let promise = new Promise((resolve, reject) => // promise = state : pending, result : undefined 라는 2개의 property가 있다.
    // ex) 윈도우 업데이트 시간미루기
    //  resolve(parameter) : 약속을 성공적으로 이행했을때 출력할것
    //  resolve(parameter) function  => result 값을 undefined -> 'hello'(파라미터값) , 
    //  resolve(parameter) function => state값을 pending -> fulfilled로 변환
    setTimeout(() => resolve('hello'), 1000)) // resolve() function은 node.js가 생성해주었다.
console.log(promise) // 예약받기, promise에는 객체가 담긴다.

// 과제: 1100ms 후에 promise 를 log() 를 조회하라.
setTimeout(() => console.log(promise), 1100) // callback을 queue에 넣고 1100초 후 promise 수행 // 실행하기

// 예약이 이행되면 그것을 소비하는,처리하는 consumer, handler
// state, result => promise property
promise.then(result => console.log(result)) // then은 callback을 promise에 등록한 것이다. then(handler==consumer)