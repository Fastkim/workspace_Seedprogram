import {useState} from 'react'

function Button({cnt, onClick}) {
    return <button onClick={onClick}>{cnt}</button>
}

export default function Prop() {
    const [cnt, setCnt] = useState(0)
}