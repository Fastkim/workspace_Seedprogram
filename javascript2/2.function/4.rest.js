function add(a,b) {
    return a + b
}

console.log(add(1, 2, 3)) // parameter의 갯수가 맞지않아도 실행을 되지만 매칭되지 않은 값은 무시된다.

add = function(...args) { // parameter n개를 뜻한다. ...은 array(배열) 개념이다. collection(배열의 집합(주머니))
    let tot = 0
    for(let arg of args) tot +=arg // args(복수) -> arg(단수)로 계속 담기다가(for 반복)
    return tot
} // 파라미터의 총 합을 만드는 function

console.log(add(1), add(1, 2, 3))

function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2]) // html,css는 index가 1부터 시작
    console.log(titles.length) // titles(객체)라는 array에 .length라는 attribute
    // 문방구 뽑기 : titles라는 공안에 length라는 인형이 들어있다. (연상)
}

printName('adam','smith','operator','consul') // js.는 없는 value는 undefined로 최대한 표시.

function showName() { // arguments는 rest parameter가 내재(생략)되어있다.
    console.log(arguments.length) // arguments는 interpreter가 기본적으로 설정되어있는 값이다.
    console.log(arguments[0], arguments[1])
}

showName()
showName('ertica', 'terry')

/** spread(펼치다, 흩뿌리다), rest와 상충하는 개념 */
console.log(Math.max(1, 2, 3))


let arr = [1, 2, 3] //array(object) 문법, 공(arr)도 데이터다.
console.log(Math.max(arr))
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr2)

//과제 : 위 코드를 ...를 안 쓰는 걸로 refactoring 하라.
console.log(arr[0], arr2[1], arr2[2])

console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))


arr = [0, ...arr2, 9]
console.log(arr)