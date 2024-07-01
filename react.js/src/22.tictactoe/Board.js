import Square from './Square'
import {useState} from 'react'

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [x, setX] = useState(true)

    function onClick(i) {
        if(pickWinner(squares) || squares[i]) return

        const newSquares = squares.slice() // slice(): 통째로복제, slice(index) index값만 복제
        x ? newSquares[i] = 'X' : newSquares[i] = 'O'
        setSquares(newSquares)
        setX(!x)
    }

    function pickWinner(squares) {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let winner
        for(let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i] //구조 분해 할당
            if(squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c]))
                winner = squares[a]
        }
        return winner
    }

    return (
        <>
            <div className='board-row'>
                <Square val={squares[0]} onclick={() => onClick(0)}/>
                <Square val={squares[1]} onclick={() => onClick(1)}/>
                <Square val={squares[2]} onclick={() => onClick(2)}/>
            </div>
            <div className='board-row'>
                <Square val={squares[3]} onclick={() => onClick(3)}/>
                <Square val={squares[4]} onclick={() => onClick(4)}/>
                <Square val={squares[5]} onclick={() => onClick(5)}/>
            </div>
            <div className='board-row'>
                <Square val={squares[6]} onclick={() => onClick(6)}/>
                <Square val={squares[7]} onclick={() => onClick(7)}/>
                <Square val={squares[8]} onclick={() => onClick(8)}/>
            </div>
        </>
    )
}