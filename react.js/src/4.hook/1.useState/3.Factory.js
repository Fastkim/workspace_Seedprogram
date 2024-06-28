import React, {useState} from 'react'

export default function Factory() {
    console.log('Factory')
    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    return (
        <>
            <button onClick={() => setCarCnt(carCnt + 1)}>car</button>{' '}
            <button onClick={() => setShipCnt(shipCnt + 1)}>ship</button>
            <hr/>
            <Car cnt={carCnt}/><br/>
            <Ship cnt={shipCnt}/>
        </>
    )
}

function Car({cnt}) {
    console.log('Car')
    return `car: ${cnt}`
}
/*
function Ship({cnt}) {
    console.log('Ship')
    return `ship: ${cnt}`
}
*/

//memo는 hook은 아니다 use로시작안함
const Ship = React.memo(function({cnt}) { // component가 전달되는 property의 값이 안바뀌면 rerendering되지 않는기능을 memo라고 한다. 부모컴포넌트가 바뀌더라도
    console.log('Ship')
    return `ship: ${cnt}`
})