class Article {
    static publisher = 'ddanzi' // 클래스 안에 있는 variable을 member variable이라고 한다.

    constructor(title, viewCnt) {
        this.title = title // instance variable
        this.viewCnt = viewCnt // instance variable
    }

    static compare(article1, article2) { // member method
        return article1 - article2 // primitive로 casting 될것을 전제로 사용한것.
    }

    toString() { // instance method : 객체를 생성해야 사용할 수 있는 메서드
        return this.title // String 타입으로 casting 할 때 사용
    }

    valueOf() { // instance method
        return this.viewCnt // Number 타입으로 casting 할때 사용
    }
}

console.log(Article.publisher) // static 멤버변수는 객체를 생성하지 않고도 바로 사용할 수 있다.

//
Article.address = 'seoul' // static으로 멤버변수를 할당한것이다.
console.log(Article.address)

Article.getPrice = () => 2000 // static으로 멤버메서드를 할당한 것이다. static => 클래스라는 접두사로 바로 메서드나 변수를 할당하거나 호출할 수 있다.
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

console.log(`${article1}`)
console.log(article1 + '') // + '' : 0으로 casting 된 것이다.

//
console.log(article1.publisher, article1.address, article1.compare) // static 멤버들을 객체로 호출해보았다. undefined
console.log(Article.title, Article.viewCnt) // undefined

console.log(Object.keys(Article)) // static 멤버만 조회 (variable만 조회)
console.log(Article.prototype)
console.log(Object.keys(article1)) // instance 멤버만 조회 (variable만 조회) valueof(), toString(), Symbol() 메서드는 숨김이므로 안보인다.