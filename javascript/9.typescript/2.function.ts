function sum(a: number, b: number): number { // number type parameter를 받아서 number타입을 반환할거야.
    return a + b
}

console.log(sum(1, 2))

function add(a: number, b: number, isDouble?: boolean): number { // optional parameter로 javascript처럼 에러없이 할수있다.
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result = add(1, 2)
console.log(result)

function greet(userName: string, nullable?: boolean) { // type의 값을 정하면 다양한 타입을 return할수있음
    if(nullable) return null
    else return `Hello, ${userName}.`
}

let greeting = greet('cain')
greeting = greet('cain', true)
console.log(greeting)