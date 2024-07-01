import {useState, useEffect} from 'react'

function getConnection(url, roomType) {
    return { // 객체이므로 {}
        connect() {
            console.log(`connecting to ${roomType} room at ${url}.`)
        },
        disconnect() {
            console.log(`disconnected from ${roomType} room at  ${url}.`)
        }
    }
}
    
function ChatRoom({roomType}) {
    const [url, setUrl] = useState('http://my.com')

    useEffect(() => {
        const connection = getConnection(url, roomType)
        connection.connect()
        return () => connection.disconnect()
    }, [roomType, url]) // dependency가 []일 경우, setup이 한번 실행되고 만다.

    return (
        <>
            <label>
                URL: <input value={url} onChange={e => setUrl(e.target.value)}/>
            </label>
            <h3>Welcome to the {roomType} room.</h3>
        </>
    )
}

export default function Chat() {
    const [roomType, setRoomType] = useState('general')
    const [show, setShow] = useState(false)

    return (
        <>
            <label>
                choose the chat room:
                <select value={roomType} onChange={e => setRoomType(e.target.value)}>
                    <option value='general'>general</option>
                    <option value='travel'>travel</option>
                    <option value='music'>music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'close chat' : 'open chat'}
            </button>
            {show && <hr/>}
            {show && <ChatRoom roomType={roomType}/>}
        </>
    )
}
