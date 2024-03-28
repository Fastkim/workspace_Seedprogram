let json = '{age: 30}'

try { // 앱실행이 성공하면 실행
    let user = JSON.parse(json) // 에러발생 catch로 이동
    // 과제: user가 있으면, user.age 를 출력하다.
    if(user) console.log(user.age)
    else throw new SytaxError('user가 없습니다.') // [throw 에러객체] 생략될경우 node.js가 자동으로 실행
    // user && console.log(user.age)
} catch(e) { // 앱 실행이 실패하면 실행
    if(e instanceof SyntaxError)
        console.log('ERROR]' + e.message)
    else throw e // node.js에 던진다
}