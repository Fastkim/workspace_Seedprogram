function wrap<T>(value: T): T {
    return value
}  // generic 타입 : 임의의 변수를 원하는 타입으로 사용할 수 있도록 한다.

const output = wrap('hello') // string으로 결정
console.log(output, typeof output) // function의 generic 타입은 functiond을 call할때 결정된다.

//
interface Woman {
    womanName: string
}

const woman: Woman = {womanName: 'here'}
const woman2: Woman = wrap(woman)
console.log(woman2, typeof woman2)

//
interface Item<T> {
    itemId: number
    data: T
}

interface Animal {
    animalName: string
}

interface Place {
    locationName: string
}

const animal: Item<Animal> = {
    itemId: 1,
    data: {
        animalName: 'cat'
    }
}

const place: Item<Place> = {
    itemId: 2,
    data: {
        locationName: 'seoul'
    }
}

//
type Product<T> = {
    productId: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length(): number {
        return this.list.length
    }

    enqueue(item: T): void {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let e = queue.dequeue()
console.log(e)
e = queue.dequeue()
console.log(e)
