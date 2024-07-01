export default function Square({val, onClick}) { // 부모로부터 전달받은 val, onClick을 사용한다.
    return (
        <button className='square' onClick={onClick}>
            {val}
        </button>
    )
}

