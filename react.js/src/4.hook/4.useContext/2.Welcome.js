import {createContext, useContext, useState} from 'react'
import './2.style.css'

const UserContext = createContext(null)

export default function Welcome() {
    const [user, setUser] = useState(null)

    return ( // value로 object을 넣어본다.
        <UserContext.Provider value={{user, setUser}}>
            <Form/>
        </UserContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Login/>
        </Panel>
    )
}

function Panel({title, children}) {
    return (
        <section className='panel'>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Login() {
    const {user, setUser} = useContext(UserContext)
    let element
    if(!user) element = <Button onClick={() => setUser({
        username: 'advika'
    })}>login</Button>
    else element = <p>you logged in as {user.username}</p>

    return element
}

function Button({onClick, children}) {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    )
}