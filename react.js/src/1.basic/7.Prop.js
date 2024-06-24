import {useState} from 'react'

function Button({cnt, onClick}) {
    return <button onClick={onClick}>{cnt}</button>
}

export default function Prop() { // 부모에 변화가 일어나면 자식까지도 변화가 일어난다.
    const [cnt, setCnt] = useState(0)
    
    function onClick() {
        setCnt(cnt + 1)
    }

    return ( // Prop의 자식객체
        <>
            <Button cnt={cnt} onClick={onClick}/>
            <Button cnt={cnt} onClick={onClick}/>
        </>
    )
}