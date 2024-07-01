import {useRef} from 'react'
import './4.style.css'

export default function Gallery() {
    const ref = useRef(null)

    function showImg(i) {
        const imgs = ref.current
        const img = imgs.querySelectorAll('li > img')[i] //querySelectorAll 내가 원하는 객체를 뽑아옴

        img.scrollIntoView({ // 이미지를 중앙에 가져오게하는 API
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