import Square from './Square'
import {useState} from 'react'

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [x, setX] = useState(true)

    function onClick(i) { // parameter로 index를 받는다.
        if(pickWinner(squares) || squares[i]) return // 낙장불입, 이미 O,X가 되어있는경우 변경불가능
        
        const newSquares = squares.slice() // slice(): 전체 복제, slice(index): index 범위만 복제
        x ? newSquares[i] = 'X' : newSquares[i] = 'O'
        setSquares(newSquares)
        setX(!x)
    }

    function pickWinner(squares) {
        const wins = [
            [0, 1, 2], // 가로줄로 나란히 있는경우
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // 세로줄로 나란히 있는경우
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // 대각선으로 나란히 있는경우
            [2, 4, 6]
        ]

        let winner
        for(let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i]
            if(squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c]))
                winner = squares[a] // null return 하므로 위의 조건식이 null이된다.
        }

        return winner
    }

    return (
        <>
            <div className='board-row'>
                <Square val={squares[0]} onClick={() => onClick(0)}/>
                <Square val={squares[1]} onClick={() => onClick(1)}/>
                <Square val={squares[2]} onClick={() => onClick(2)}/>
            </div>
            <div className='board-row'>
                <Square val={squares[3]} onClick={() => onClick(3)}/>
                <Square val={squares[4]} onClick={() => onClick(4)}/>
                <Square val={squares[5]} onClick={() => onClick(5)}/>
            </div>
            <div className='board-row'>
                <Square val={squares[6]} onClick={() => onClick(6)}/>
                <Square val={squares[7]} onClick={() => onClick(7)}/>
                <Square val={squares[8]} onClick={() => onClick(8)}/>
            </div>
        </>
    )
}

// npm cache clear --force: 이전 cache가 작동하고 있을때 삭제하는 명령문