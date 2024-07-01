import {useRef} from 'react'

export default function Ref() { 
    // reference가 바뀌어도 Ref컴포넌트를 rendering을 안한다.
    // 객체의 current값을 바꾸는것
    // ref는 화면에 보여줄 데이터가 아닌것이다.
    // 화면에 보여줄거면 state
    console.log('Ref')
    let ref = useRef(0)  //ref객체의 내부모습 => {current: 0}

    function onClick() {
        ref.current = ref.current + 1
        console.log(ref)
    }

    return <button onClick={onClick}>click</button>
}