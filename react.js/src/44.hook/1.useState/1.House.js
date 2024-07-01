import {useState} from 'react'

export default function House() {
    console.log('House')
    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
        </>
    )
}

function LivingRoom() {
    console.log('LivingRoom')
    const [light, setLight] = useState(false)
    let roomName = '거실'
    if(light) roomName += 'O'

    return <button onClick={() => setLight(!light)}>{roomName}</button>
}

function RestRoom() {
    console.log('RestRoom')
    const [light, setLight] = useState(false)
    let roomName = '욕실'
    if(light) roomName += 'O'

    return <button onClick={() => setLight(!light)}>{roomName}</button>
}