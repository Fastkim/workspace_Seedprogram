import {useState, useRef} from 'react'

export default function Video() {
    const [play, setPlay] = useState(false)
    const ref = useRef(null)

    function onClick() {
        const nextPlay = !play
        setPlay(nextPlay)
        if(nextPlay) ref.current.play()
        else ref.current.pause()
    }

    return (
        <>
            <button onClick={onClick}>{play ? 'pause' : 'play'}</button>
            <hr/>
            <video width='250'
                ref={ref}
                onPlay={() => setPlay(true)}
                onPause={() => setPlay(false)}>
                <source type='video/mp4'
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'/>
            </video>
        </>
    )
}