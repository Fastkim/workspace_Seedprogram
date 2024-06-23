import './/2.style.css'

const user = {
    username: 'heady',
    image:  'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
}

export default function Face() {
    return(// 하나의 객체 안에 자식 객체들이 담긴다.
        <>
            <h1>{user.username}</h1>
            <img className='avatar'
                src={user.image}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}/>
        </>
    )
}
// empty fragment ==> 주머니 같이 어떤 객체를 나타내는 fragment