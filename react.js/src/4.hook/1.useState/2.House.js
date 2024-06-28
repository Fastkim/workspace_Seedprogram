import {useState} from 'react'

export default function House() {
    const [livingOn, setLivingOn] = useState(false)
    const [restOn, setRestOn] = useState(false)

    return (
        <>
            <button onClick={() => setLivingOn(!livingOn)}>거실</button>
            <button onClick={() => setRestOn(!restOn)}>욕실</button>
            <hr/>
            <LivingRoom light={livingOn}/><br/> 
            <RestRoom light={restOn}/>
        </>
    )
}

function LivingRoom({light}) {
    let roomName = '거실'
    if(light) roomName += 'O'
    return roomName
}

function RestRoom({light}) {
    let roomName = '욕실'
    if(light) roomName += 'O'
    return roomName
}