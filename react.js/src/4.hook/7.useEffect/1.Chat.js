import {useState, useEffect} from 'react'

function getConnection(url, roomType) { //useEffect은 나의 앱(internal)과 다른앱(external)이랑 연결할때 사용
    return {
        connect() {
            console.log(`connecting to ${roomType} room at ${url}.`)
        },
        disconnect() {
            console.log(`disconnected from ${roomType} room at ${url}.`)
        }
    }
}

function ChatRoom({roomType}) {
    const [url, setUrl] = useState('http://my.com')

    useEffect(() => { // return 전에 영역을 setup이라고 한다, return에는 clean으로 청소작업을 진행
        const connection = getConnection(url, roomType)
        connection.connect()
        return () => connection.disconnect() //clean 부분, return이 없어도 되고, return이 없으면 청소작업이 없는것이다.
    }, [roomType, url]) // roomType, url이 dependency이며, roomType,url중 둘중하나라도 바뀌면 clean작업을 진행하고 setup을 다시 실행한다.
    // url은 state이고 roomType은 property

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

    return ( //<></> empty pregment 
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