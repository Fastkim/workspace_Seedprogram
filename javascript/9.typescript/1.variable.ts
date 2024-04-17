let msg: string = 'hello'
// msg = 1

let val: number = 1
let nullableStr: string | null = null // union type : tpye | type
nullableStr = 'Hi'
// nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean = true // variable이 boolean타입이면 앞에 is접두사를 붙이는게 관례
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1 // type을 compiler가 추측하여 number타입을 할당하는것.
// a = 'hello'