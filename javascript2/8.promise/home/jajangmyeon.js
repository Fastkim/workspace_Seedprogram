/* 과제:
4.class/home/2.jajangmyeon.js를 promise로 refactoring 하라.
*/

class Food {
    constructor(foodName, flavor) {
        this.foodName = foodName
        this.flavor = flavor
    }

    [Symbol.toPrimitive]() {
        return `${this.flavor} ${this.foodName}`
    }
}