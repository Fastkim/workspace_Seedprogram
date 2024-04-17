/* 과제:
3. object/home/4.jajangmyeon.js를 class로 refactoring 하라.
*/

class Food {
    constructor(foodName, flavor) {
        this.foodName = foodName
        this.flavor = flavor
    }
    
    toString() {
        return `${this.flavor} ${this.foodName}`
    }
}

class Chef {
    constructor(flavor) {
        this.flavor = flavor // flavor : 각 개체를 구분하는 속성 flavor
    }


    cook(foodName) { // foodName : 함수 내부에서 사용하기 위한 속성 
        return new Food(foodName, this.flavor)
    }
}

class Waiter { // waiter는 한명이라서 구분하기 위한 constructor가 필요없다.
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}
    

let chef1 = new Chef('매운')
let chef2 = new Chef('달콤한')

let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1) + '') // + '' String 타입이라는걸 객체에 알려주기 위해서
