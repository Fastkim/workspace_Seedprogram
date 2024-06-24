// react API ==> hook ==> 메소드 이름이 use로 시작된다.
// component가 갖고있는 데이터: state
import {useState} from 'react'

export default function State() {
    const [cnt, setCnt] = useState(0)

    function onClick() { //handler
        setCnt(cnt + 1)
    }

    return <button onClick={onClick}>{cnt}</button>
}
// 첫 번째 변수에 담는 초기값