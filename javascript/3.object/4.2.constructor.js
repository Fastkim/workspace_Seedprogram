function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(shooterName, gun) {
    this.shooterName = shooterName
    this.fire = () => gun.fire() // dependency : fire객체는 gun객체에 의존한다.
}

let gun = new Gun() // new가 생기는순간 메모리공간을 차지.
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()


//
function Ball() {}

function Player(playerName) {
    this.playerName = playerName
    this.pass = ball => ball // parameter : 알고리즘이 시작됐을때 사용될 데이터 // retrun value : 알고리즘이 끝났을때 반환될 데이터
    this.kick = ball => ball
}

// 과제 : 다음 이야기를 표현하라.
// 최한석이 한아름에게 공을 패스했다. 한아름은 양승일에게 공을 패스한다.
// 양승일은 공을 찬다.
// 객체는 명사이므로 동사는 객체의 메서드로 표현한다.

const ball = new Ball()
const player1 = new Player('최한석')
const player2 = new Player('한아름')
const player3 = new Player('양승일')

player3.kick(player2.pass(player1.pass(ball)))

// 명사: 객체 , 동사 : 메서드 로 표현
function Food(foodName) {
    this.foodName = foodName
}

function Mom() {
    this.cook = foodName => new Food(foodName)
}

function Child() {
    this.eat = food => {}
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))



