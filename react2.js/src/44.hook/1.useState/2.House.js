import React, {useState} from 'react'

//export default를 사용하면 해당모듈엔 객체가 하나만 있다는 사실을 명시
export default function House() { // export default로 내보내면 import할때 중괄호를 쓰지않아도됨.
    console.log('House')
    const [livingLight, setLivingOn] = useState(false)
    const [restLight, setRestOn] = useState(false)

    return ( // 부모가 rerendering이 되면 자식도 rerendering이 되는것이다.
        <>
            <button onClick={() => setLivingOn(!livingLight)}>거실</button>
            <button onClick={() => setRestOn(!restLight)}>욕실</button>
            <hr/>
            <LivingRoom light={livingLight}/><br/>
            <RestRoom light={restLight}/>
        </>
    )
}
// 1.House.js에서는 light를 자식관점에서 state로 가지고있다.
// 2.House.js에서는 light를 자식관점에서 property로 가지고있다.
// 여기서는 property가 안바뀌었어도 부모의 state가 바뀌었기때문에 자식들은 무조건 갱신된다.

function LivingRoom({light}) {
    console.log('LivingRoom')
    let roomName = '거실'
    if(light) roomName += 'O'
    return roomName
}

// memo: property가 바뀌었으면 rendering, 안바뀌었으면 기존값을 그대로 사용.
// 이 기술을 사용하는 이유는 resource 절약이다.
const RestRoom = React.memo(function RestRoom({light}) {
    console.log('RestRoom')
    let roomName = '욕실'
    if(light) roomName += 'O'
    return roomName
})