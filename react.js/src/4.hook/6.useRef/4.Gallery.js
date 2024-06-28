import {useRef} from 'react'
import './4.style.css'

export default function Gallery() {
    const ref = useRef(null)

    function showImg(i) {
        const imgs = ref.current
        const img = imgs.querySelectorAll('li > img')[i]

        img.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <nav>    
                <button onClick={() => showImg(0)}>road</button>
                <button onClick={() => showImg(1)}>tree</button>
                <button onClick={() => showImg(2)}>flower</button>
            </nav>
            <div>
                <ul ref={ref}>
                    <li><img src='https://picsum.photos/id/17/200/200'/></li>
                    <li><img src='https://picsum.photos/id/19/200/200'/></li>
                    <li><img src='https://picsum.photos/id/25/200/200'/></li>
                </ul>
            </div>
        </>
    )
}