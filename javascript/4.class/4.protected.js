class CoffeeMachine {
    waterAmount = 0  // instance variable

    constructor(voltage) {
        this.voltage = voltage // instance variable
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine))
console.log(CoffeeMachine.prototype)

let machine = new CoffeeMachine(220)
console.log(machine)
console.log(Object.keys(machine))

machine.waterAmount = 1
machine.voltage = 100
console.log(machine)

//
CoffeeMachine = class {
    _waterAmount // instance variable

    get waterAmount() {  // getter
        return this._waterAmount + 100  // _waterAmount variable을 읽을때 사용하는 메서드 , 이런식으로 보안을 위해 메서드로 variable을 
                                        //  read,write를 하는걸 캡슐화라고 한다.
    }

    set waterAmount(waterAmount) { // setter
        this._waterAmount = 2 * waterAmount // _waterAmount variable을 쓸때 사용하는 메서드
    }
}

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1 // variable에 할당연산자로 value가 부여되면 node.js가 set 메서드를 작동시킨다. 
                        // 즉, setter를 콜하고 있는것이다. 메서드를 따로 콜해서 variable을 주지 않아도 된다.
console.log(machine)
console.log(machine.waterAmount)

// variable 에 getter, setter 이용하지 않고 직접 접근할 수도 있다.
// 단, variable name을 정확히 입력해야한다.
machine._waterAmount = 11
console.log(machine._waterAmount)