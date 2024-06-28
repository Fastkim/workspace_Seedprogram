import {createContext, useContext, useState} from 'react';
import './1.style.css'

const ThemeContext = createContext(null)
const UserContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={{user, setUser}}>
                <WelcomePanel/><br/>
                <label>
                    <input type='checkbox'
                        checked={theme === 'dark'}
                        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                        use dark mode
                </label>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel() {
    const {user} = userContext(UserContext)
    return (
        <Panel title='welcome'>
            {user ? <Greeting/> : <Login/>}
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext)
    const className = 'panel+' + theme
    
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Greeting() {
    const {user} = useContext(UserContext)
    return <p>you logged in as {user.username}</p>
}

function Login() {
    const {setUser} = userContext(UserContext)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const valid = firstname && lastname

    return (
        <>
            <label>
                firstname:{' '}
                <input required
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}/>
            </label><br/>
            <label>
                lastname:{' '}
                <input required
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}/>
            </label><br/>
            <Button disabled={!valid}
                onClick={() => setUser({username: firstname + ' ' + lastname})}/>
                    log in
        </>
    )
}

function Button({disabled, onClick, children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className}
            disabled={disabled}
            onClick={onClick}/>
                {children} 

    )
}