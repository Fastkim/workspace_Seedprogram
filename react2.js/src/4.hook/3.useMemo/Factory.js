import {useState, useMemo} from 'react'

export default function Factory() {
    console.log('Factory')
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = () => setShipCnt(shipCnt + 1)

    // let productCnt = carCnt + shipCnt
    // useMemo는 첫번째 파라미터 콜백을 실행해서 리턴된 값을 리턴한다.
    // 물리적으로 Factory가 rendering 될때마다 productCnt는 바뀐다.
    // 주의사항: useMemo의 경우 1. () 파라미터가 없어야한다 2. 알고리즘단(body)에 return이 있어야한다.
    let productCnt = useMemo(() => carCnt + shipCnt, [shipCnt])

    return ( // cache하는 대상이 value: useMemo, cache하는 대상이 callback: call
        <>
            <h1>{productCnt}</h1>
            <hr/>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

function Car({make}) {
    console.log('Car')
    return <button onClick={make}>car</button>
}

function Ship({make}) {
    console.log('ship')
    return <button onClick={make}>ship</button>
}