import {useRef} from 'react'

export default function Focus() {
    const ref = useRef(null)

    function onClick() {
        ref.current.focus()
    }

    return ( // input 객체가 ref current값으로 들어간다. 즉 ref에 객체를 할당하는 방법
        <>
            <input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}