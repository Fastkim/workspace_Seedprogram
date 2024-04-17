interface Profile {
    userId: number
    userName: string
    nickName: string
}

function printUsername(profile: Profile) {
    console.log(profile.userName)
}

const profile: Profile = {
    userId: 1,
    userName: 'cain',
    nickName: 'hero'
}

printUsername(profile)
console.log(typeof profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        userId: 1,
        userName: 'cain',
        nickName: 'hero'
    },
    to: {
        userId: 2,
        userName: 'abel',
        nickName: 'warrior'
    }
}

//
interface Account extends Profile { // interface는 object 타입
    email: string
    password: string
}

const account: Account = {
    userId: 4885,
    userName: 'Murderer',
    nickName: 'killing Machine',
    email: 'shadow@gmail.com',
    password: 'iam4885'
}

//
interface User {
    userId: number
    userName: string
    photoUrl?: string
}

let user: User = {
    userId: 1,
    userName: 'abel',
    // photoUrl: 'face,jpg'
}

//
interface Shape { // interface를 사용하는건 주형틀인가
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number){}

    getArea(): number {
        return this.width * this.height
    }

    getPerimter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4,6)
console.log(circle.getArea())