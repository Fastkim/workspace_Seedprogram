let add = function(a, b) {
    return a + b
}

add = (a,b) => a + b // => arrow 문법
console.log(add(1,2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

add = (a,b) => {
    const result = a + b
    return result // n개의 블록내부 코드는 return을 생략하지않음
}

console.log(add(1,2))