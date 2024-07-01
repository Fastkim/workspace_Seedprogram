import {createContext, useContext, useState} from 'react'
import './1.style.css'

const ThemeContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={theme}>
            <Form/> <br/>
            <label>
                <input type='checkbox'
                    checked={theme === 'dark'}
                    onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                    use dark mode
            </label>
        </ThemeContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Button>sign up</Button>
            <Button>log in</Button>
        </Panel>
    )
}

function Panel({title, children}) {
    //component에 children을 쓰면 자식객체인 Button 2개가 들어온다.
    //즉 자식객체를 컨트롤 할 수 있다.
    const theme = useContext(ThemeContext) // useContext는 해당 Context가 가지고있는 value값을 리턴해줌. (dark)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
} 

function Button({children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className}>
            {children}
        </button>
    )
}