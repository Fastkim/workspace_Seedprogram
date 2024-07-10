import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import './main.css'

const Main = () => {
    return (
        <Container style={{width:'500px'}} className='border border-dark'>
            <Row>
                <Col>
                    <div className='row border border-dark p-3 col-3'>로고이미지</div>
                    <div className='row mt-3'>
                        <Form className="d-flex col-5">
                            <Form.Select aria-label="Default select example" className='col-6'>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 col-6"
                            aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </div>
                    <div className='row border border-dark p-4 col-10 text-center'>타이틀</div>
                </Col>
            </Row>
            
            <div className='row mt-3'>지역</div>
            <div className='row mt-3'>
                <div className='col d-flex gap-5'>
                    <div className='border border-dark col-4 p-5 text-center'><label className=''>Image</label></div>
                    <div className='border border-dark col-4 p-5'><label className=''>Image</label></div>
                    <div className='border border-dark col-4 p-5'><label className=''>Image</label></div>
                </div>
            </div>
        </Container>

    )
}

export default Main