import {Row, Col, Container} from 'react-bootstrap'

const AdminTop = () => {
    return (
        <Container id='adminContainer'>
            <Row>
                <Col className='border border-dark d-flex align-items-center justify-content-start' xs={4}>
                    <div className='border border-dark ms-4 p-2'>로고이미지</div><div className='ms-4 fs-5 fw-bold'>Admin</div>
                </Col>
                <Col className='border border-dark p-4' xs={8}>
                    <div className='border border-dark d-inline p-2'>선택된 메뉴명 표시</div>
                </Col>
            </Row>
        </Container>
    )
}
export default AdminTop