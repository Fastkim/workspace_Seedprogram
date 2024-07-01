import {useState, useRef} from 'react'

export default function Timer() {
    const [start, setStart] = useState(null)
    const [now, setNow] = useState(null)
    const timeId = useRef(null)

    function startTimer() {
        setStart(Date.now())
        setNow(Date.now())
        clearInterval(timeId.current)
        timeId.current = setInterval(() => setNow(Date.now()), 10)
    }

    function stopTimer() {
        clearInterval(timeId.current)
    }

    let elapsed = 0
    if(start && now) elapsed = (now - start) / 1000

    return (
        <>
            <h1>{elapsed.toFixed(2)}</h1>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
        </>
    )
}