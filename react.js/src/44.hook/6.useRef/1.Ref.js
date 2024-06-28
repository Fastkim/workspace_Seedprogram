import {useRef} from 'react'

export default function Ref() {
    console.log('Ref')
    let ref = useRef(0)

    function onClick() {
        ref.current = ref.current + 1
        console.log(ref)
    }

    return <button onClick={onClick}>click</button>
}