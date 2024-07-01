import React, {createContext, useContext, useState} from 'react'
import './style.css'

const ThemeContext = createContext(null)
const UserContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState(null)

    return ( //context에 value값 넣기
        <ThemeContext.Provider value={theme}> 
            <UserContext.Provider value={{user, setUser}}>
                <WelcomePanel/><br/>
                <label>
                    <input type='checkbox'
                        checked={theme === 'dark'}
                        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                </label>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel() { 
    // context를 꺼내올때는 useContext 사용
    // useContext를 사용하지않았다면 Welcome 컴포넌트에서 직접 보내줘야했다.
    // 필요한놈이 useContext로 가져와 사용할수 있는것.
    const {user} = useContext(UserContext)
    return (
        <Panel title='welcome'>
            {user ? <Greeting/> : <Login/>}
        </Panel>
    )
}

function Panel({title, children}) { // children을 쓰면 <Panel>컴포넌트의 자식 {user ? <Greeting/> : <Login/>} 이부분이 들어온다.
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Greeting() {
    const {user} = useContext(UserContext)
    return <p>You logged in as {user.username}.</p>
}

function Login() {
    const {setUser} = useContext(UserContext)
    const [userId, setUserId] = useState('')
    const [pw, setPw] = useState('')
    const valid = userId && pw

    return (
        <>
            <label>
                ID: <input type='text' required
                        value={userId}
                        onChange={e => setUserId(e.target.value)}/>
            </label><br/>
            <label>
                PW: <input type='password' required
                        value={pw}
                        onChange={e => setPw(e.target.value)}/>
            </label><br/>
            <Button disabled={!valid}
                onClick={() => setUser({userId, pw})}>
                log in
            </Button>
        </>
    )
}

function Button({disabled, onClick, children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme
    
    return (
        <button className={className}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}