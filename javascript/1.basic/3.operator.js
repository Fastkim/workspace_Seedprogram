/** arithmetic operator */
let val = 1 + 2 * 3 / 2 /** 코드 한줄을 statement라고 한다. 이 statement에는 총 4개의 연산자가 있다. + 산술연산자를 제일 많이 사용 */
console.log(val, 5 % 2, 4 ** 2, 4 ** (1/2)) /** % -> 나머지를 리턴한다. 4 ** 2 : 4의 2승 */

let i = 1
// console.log(++i, ++i, i++)

//i++ 과제: i++과 같은 뜻을 달리 표현하라.
console.log(i = i+1, i = i+1, i)
i = i + 1
i += 1

/** concatenation(붙이기) */
let foo = 'hello' /** variable 타입은 담고있는 데이터의 타입에 따른다.(javascript의 경우) */
let bar = 'world'
let word = foo + bar
// 과제: parameter로, 'hello world'를 만들어라.
word = foo + ' ' + bar
console.log(word)

console.log(1 + '2') // + 근처에 피연산자로 String타입이 있으면 붙이기로 작동

// unary plus operator
console.log(1 + +'2') // String앞에 '+'기호를 써넣으면 String을 넘버타입으로 변환

/** logical */
console.log(1 || 0, 0 || 1)  // ||(빠른 or) -> (|, || 는 연산속도의 차이이다.) 
console.log(1 && 0, 0 && 1) //  &&(빠른 and) -> and 
console.log(1 && 2, 2 && 1) // parsing이 어디까지 진행되느냐의 차이 and연산이기때문에 첫 false를 발견할때까지 연산


//foo && do(foo) // 데이터가 들어있지않은상태를 (undefined -> false), (데이터가 있으면 -> true -> do API를 실행하겠다.)
bar = bar || createBar() // 1) bar가 true일 경우 bar에 baz를 할당하고 끝. 2) bar가 false일 경우 createBar 리턴값을 bar에 할당하고 끝.


/** assignment aperator(대입 연산자) */
console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
// d = d * 2
console.log(d)

/** comparison operator(비교 연산자) */
console.log()
console.log('2' > 1, '01' == 1, false == 0, '0' == 0, '' == false) // 형변환 우선순위 number > String==bolean, 연산자가 있을때 자동 casting된다.
console.log(true > 1)

// equivalent(같다, ==, logical(의미))
console.log(1 == '1', 1 != '1') // != -> 같지 않다라는 operator

// identical(같다, ===, physical)
console.log(1 === '1', 1 !== '1') // 타입까지 똑같아야 true return

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') // 유니코드 비교, 같은자리의 알파벳끼리 비교한다.\

console.log(null > 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >=0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)

