import {useState, useEffect} from 'react'

export default function Pointer() {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => { //setup은 최초에 딱 1번만 실행된다.
        console.log('useEffect')
        function onMove(e) {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('pointermove', onMove) // 리스너(setup)는 한번만 등록해주면된다.
        return () => window.removeEventListener('pointermove', onMove)
    }, []) // dependency([])가 생략되면 pointer가 움직일때마다 setup이 계속 생성되는것이다.

    return (
        <>
            <div style={{ // 권장하지는 않는 style 부여방법
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40
            }}/>
        </>
    )
}