/* 과제:
4.class/home/2.jajangmyeon.js를 promise로 refactoring 하라.
*/

class Food {
    constructor(foodName, flavor) {
        this.foodName = foodName
        this.flavor = flavor
    }

    [Symbol.toPrimitive]() {
        return `  ${this.flavor} ${this.foodName} `
    }
}

class Chef {
    constructor(flavor) {
        this.flavor = flavor // flavor : 각 개체를 구분하는 속성
    }

    async cook(foodName) { // foodName: 함수 내부에서 사용하기 위한 속성
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(new Food(foodName, this.flavor)), 3000)
            })
    }
}

class Waiter { // waiter는 한명이라서 구분하기 위한 constructor가 필요없다.
    async order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(food => console.log(food + ''))
waiter.order('짬뽕', chef2).then(food => console.log(food + '')) // + '' String 타입이라는걸 객체에 알려주기 위해서