import {useRef} from 'react'

export default function Focus() {
    const ref = useRef(null)

    function onClick() {
        ref.current.focus()
    }

    return (
        <>
            <input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}