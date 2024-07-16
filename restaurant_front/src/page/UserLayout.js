import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'

const UserLayout = ({children}) => {
    return (
        <>
            <Container className='border border-dark Container'>
                <Header/>
                    <div>
                        <main>
                            {children}
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default UserLayout