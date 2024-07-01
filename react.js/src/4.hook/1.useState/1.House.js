import {useState} from 'react'

export default function House() {
    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
            <BedRoom/>
        </>
    )
}

function LivingRoom() {
    const [light, setLight] = useState(false)
    let roomName = '거실'
    if(light) roomName += 'O'

    return <button onClick={() => setLight(!light)}>{roomName}</button> //{}를 써야 자바스크립트 밸류로 인식한다.
}

function RestRoom() {
    // const light = false (useState를 사용하지않는 이런식의 데이터주입은 component의 갱신이 없다.)
    const [light, setLight] = useState(false)
    let roomName = '화장실'
    if(light) roomName += 'O'
    
    return <button onClick={() => setLight(!light)}>{roomName}</button>
}

function BedRoom() {
    const [light, setLight] = useState(false)
    let roomName = '침실'
    if(light) roomName += 'O'
    
    return <button onClick={() => setLight(!light)}>{roomName}</button>
}

//rendering = 갱신하다