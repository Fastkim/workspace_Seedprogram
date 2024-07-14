import {Container, Row, Col, Navbar, Nav, Form, Button, InputGroup} from 'react-bootstrap'
import {ArrowUpCircle, Justify} from 'react-bootstrap-icons';

const ReviewUpdate = () => {
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
                    <div className='fw-bold text-center mt-3 ms-3'>후기 수정</div>
                    <hr/>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="barrier_free">
                            <Form.Label column sm="2" className='pe-0'>
                            작성자:
                            </Form.Label>
                            <Col sm="9" className='ps-0'>
                            <Form.Control plaintext readOnly defaultValue="aaa" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="barrier_free">
                            <Form.Label column sm="2" className='pe-0'>
                            등록일:
                            </Form.Label>
                            <Col sm="9" className='ps-0'>
                            <Form.Control plaintext readOnly defaultValue="2024-08-04" />
                            </Col>
                        </Form.Group>
                    </Form>
    
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        편의성
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        defaultValue={'키오스크'}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        별점
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        defaultValue={'★★'}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        감상평
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        defaultValue={'이건 쓰레기만도 못하다.'}
                        />
                    </InputGroup>
                    <InputGroup className='mb-5'>
                        <InputGroup.Text>내용</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" rows={8}
                            defaultValue={`키오스크라는 것이 평일 주말 할 것 없이 작동도 안되고, 직원이라는 분도 단순한 말도 못 알아먹냐는 핀잔을 매일같이 줌....
                                \n이런 데서 사 먹을 수 있기는 할까 싶음...
                                \n...............
                                \n아.. 나는 참고로 3급 청각장애임.`}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row className='float-end'>
                <Col>
                    <Button variant="secondary" className='clBtn questionUpdateBtn'><span>목록</span></Button>
                </Col>
                <Col>
                    <Button variant="secondary" className='clBtn questionUpdateBtn'><span>저장</span></Button>
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

export default ReviewUpdate