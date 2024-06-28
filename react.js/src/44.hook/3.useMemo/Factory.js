import React, {useState, useCallback, useMemo} from 'react'

export default function Factory() {
    console.log('Factory')
    const [car, setCar] = useState(0)
    const [ship, setShip] = useState(0)

    const makeCar = useCallback(() => setCar(car + 1), [car])
    const makeShip = useCallback(() => setShip(ship + 1), [ship])

    // useMemo: 1.파라미터가 없어야한다, 2. return이 있어야한다.
    let product = useMemo(() => car + ship, [ship])

    return (
        <>
        <h1>{product}</h1>
        <hr/>
        <Car make={makeCar}/>
        <Ship make={makeCar}/>
        </>
    )
}

const Car = React.memo(function({make}){
    console.log('Car')
    return <button onClick={make}>car</button>
})

const Ship = React.memo(function({make}) {
    console.log('Ship')
    return <button onClick={make}>ship</button>
})