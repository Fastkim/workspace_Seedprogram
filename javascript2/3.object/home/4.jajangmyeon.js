/* 과제:
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/

function Food(foodName, flavor) {
    this.foodName = foodName
    this.flavor = flavor
}

function Chef(flavor) {
    this.cook = foodName => new Food(foodName, flavor)
}

function Waiter() {
    this.order = (foodName,chef) => chef.cook(foodName)
}

let chef1 = new Chef('매운')
let chef2 = new Chef('달콤한')

let waiter = new Waiter()

waiter.order('짜장면',chef1)
waiter.order('짜장면',chef2)


console.log(waiter.order('짜장면', chef1))


