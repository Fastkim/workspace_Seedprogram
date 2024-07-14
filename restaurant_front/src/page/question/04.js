import {Container, Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap'
import {ArrowUpCircle, Justify} from 'react-bootstrap-icons';

const QuestionUpdate = () => {
    return (
        <Container className='border border-dark Container mt-5'>
            <Row>
                <Col className='logo'>
                    <div className='logo_img text-center'>
                        <div className='logo_text'>로고이미지</div>
                    </div>
                </Col>
                <Col className='mt-3'>
                    <Justify className='float-end ms-3' id='list'/>
                </Col>
            </Row>
            <Row>
                <Col className='mx-5'>
                    <div className='fw-bold'>문의</div>
                    <hr/>
                    <Form>
                        <Form.Control
                            type="text"
                            value={'검색창이 안 쳐져요.'}
                        />
                        <hr/>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='fw-bold'>내용</Form.Label>
                            <Form.Control as="textarea" rows={8}
                                value={`검색창에 제가 자주가던 음식점을 검색했는데 뜨질 않아요. 어떻게 된 일인가요?`}
                                />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className='float-end'>
                <Col>
                    <Button variant="secondary" className='clBtn questionUpdateBtn'><span>등록</span></Button>
                </Col>
                <Col>
                    <Button variant="secondary" className='clBtn questionUpdateBtn'><span>취소</span></Button>
                </Col>
            </Row>
            
            <Row className='mt-5'>
                <div id='footer'>
                    <div id='nav text-center'>
                        <Navbar>
                            <Container >
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto footerNavigation text-center mt-4">
                                        <Nav.Link href="#link" className='text-white p-0 navText mt-1'>이용약관 |</Nav.Link>
                                        <Nav.Link href="#link" className='text-white p-0 ms-1 fs-5 navText'>개인정보처리방침 |</Nav.Link>
                                        <Nav.Link href="#link" className='text-white p-0 ms-1 mt-1 navText'>사이트맵</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div className='footerText'>
                        <p className='mb-0'>상호: 비프리주식회사 | 대표이사: 한성목 | 설립일: 2024년 7월 10일 | 개인정보관리책임자: 김다훈</p>
                        <p className='mb-0'>문의 : hr@gmail.com | 사업자등록번호: 123-45-67890 | 통신판매업 신고번호: 0000-서울중구-00000호</p>
                        <p className='mb-0'>서울특별시 중국 퇴계로 173 남산스퀘어 11층</p>
                    </div>
                    <Row className='mt-4 text-center footerEnd' >
                        <p className='footerEndText'>Copyright 2024 BEFREE | All Rights Reserved<span className='float-end ms-2 mt-1'>맨위로</span><ArrowUpCircle className='arrowUpCircle float-end'/></p>
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default QuestionUpdate