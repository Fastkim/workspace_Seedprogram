import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
  
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
setScreenSize();

const Layout = ({children}) => {
    return (
        <>
            <Container className='border border-dark Container wrapper'>
                <Header/>
                    <div className='contentWrapper'>
                        <main>
                            {children}
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default Layout