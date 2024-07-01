import React, {useState, useCallback} from 'react'

export default function Factory() {
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    // [shipCnt]:dependency,여러개 나열가능, 해당객체를 추적하여 해당 callback이 새롭게 생성될지, 기존 cache를 사용할지 결정
    // 즉 shipCnt값이 바뀌었으면 새롭게 Factory 컴포넌트를 생성하고, 아니라면 기존의 저장된 캐시를 사용
    // useCallback은 callback을 return한다, dependecy는 array타입으로 쓰면된다.
    const makeShip = useCallback(() => setShipCnt(shipCnt + 1), [shipCnt]) 

    // function도 데이터이다, 객체이다.
    // Factory가 다시 실행되면 새로운 function이 새롭게 실행되고 그럼 function이라는 데이터는 바뀐것이다.
    // Factory가 rerendering되면서 makeCar와 makeShip이 새롭게 생성된다.
    // makeCar와 makeShip은 callback이다.
    // callback 은 내가 쓰는게 아니고 남이쓰는걸 정의한 함수

    return (
        <>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

const Car = React.memo(function({make}) { //property(function 일경우)가 안바뀐다? => 메모로 준비하자
    console.log('Car')
    return <button onClick={make}>car</button>
})

const Ship = React.memo(function({make}) {
    console.log('Ship')
    return <button onClick={make}>ship</button>
})
