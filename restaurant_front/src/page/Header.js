import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {Key, Justify} from 'react-bootstrap-icons';

const Header = () => {
    return (
        <header>
            <Row className='header'>
                <Col className='logo'>
                    <div className='logo_img text-center bg-light'>
                        <div className='logo_text'>로고이미지</div>
                    </div>
                </Col>
                <Col className='mt-3'>
                    <Link to={'/'}>
                        <Justify className='float-end ms-3' id='list'/>
                    </Link>
                    <Link to={'/login'}>
                        <Key className='float-end' id='login' href=''/>
                    </Link>
                </Col>
            </Row>
        </header>
    )
}

export default Header