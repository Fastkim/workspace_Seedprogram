const greeting = 'hello'

say('abel')

function say(userName) { // Function Declarations (함수 선언식) 호이스팅에 따라 interpreter가 시작될때 맨위에서 해석됨.
    console.log(greeting, userName)
}