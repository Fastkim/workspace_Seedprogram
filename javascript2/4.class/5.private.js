class CoffeeMachine {
    #waterAmount // _ 대신 #이 들어간다. 보안이 강화된 버젼

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

let machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

// machine,#waterAmount = 1 // Private field error : variable에 직접 접근 불가능