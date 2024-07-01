import React, {useState, useCallback} from 'react'

export default function Factory() {
    console.log('Factory')
    const [car, setCar] = useState(0)
    const [ship, setShip] = useState(0)

    const makeCar = () => setCar(car + 1)
    const makeShip = useCallback(() => setShip(ship + 1), [ship])
    // ship이 바뀌었으면 새롭게 물리적으로 callback을 만들고
    // 자식 component가 갱신된다.
    // usercallback은 callback을 memo하는것.
    // useMemo는 value을 memo하는것.

    return (
        <>
            <Car make={makeCar}/>
            <Ship make={makeShip}/>
        </>
    )
}

// memo를 사용했는데도 자식컴포넌트들이 계속 rerendering된다.
// 논리적으로는 같은 makeCar, makeShip이지만 물리적으로는 계속 새로 생성되므로(바뀌므로)
// make property도 계속 바뀌므로 memo가 적용되지않는다.

const Car = React.memo(function({make}) {
    console.log('Car')
    return <button onClick={make}>car</button>
})

const Ship = React.memo(function({make}) {
    console.log('Ship')
    return <button onClick={make}>ship</button>
})