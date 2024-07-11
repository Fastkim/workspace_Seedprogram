import {Link} from 'react-router-dom'
import {Container, Form, Button, Row, Col, Stack, ButtonGroup, Nav, Navbar} from 'react-bootstrap'
import {ChevronDown, ChevronUp, Key, Justify} from 'react-bootstrap-icons';

const Main = () => {
    return (
        <Container id='Container' className='border border-dark'>
            <Row className='header'>
                <Col>
                    <Row>
                        <Col className='logo'>
                            <div className='logo_img text-center'>
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
                    <Row className='mt-4'>
                        <Col>
                            <Form className="d-flex">
                                <Col sm={3}>
                                    <Form.Select aria-label="Default select example">
                                        <option>선택</option>
                                        <option value="1">전체검색</option>
                                        <option value="2">음식점이름</option>
                                        <option value="3">편의성</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Control
                                    type="search"
                                    placeholder="검색어 입력"
                                    className="me-2 col-3"
                                    aria-label="Search"
                                    />
                                </Col>
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row className='border border-dark p-4 col-auto'>
                        <Col className='text-center'>
                            타이틀
                        </Col>
                    </Row>
                </Col>
            </Row>
              
                    <Row className='mt-4'>
                        <div>지역</div>
                    </Row>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                    </Stack>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                        <div className='border border-dark col p-5 text-center'>지역 이미지</div>
                    </Stack>
                    <Row className='mt-4 text-center'>
                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary" className='d-flex'><span>더보기</span><ChevronDown className='ms-2 mt-1'/></Button>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='separateLine p-2'></div>
                    </Row>
                    <Row className='mt-4'>
                        <div>편의성</div>
                    </Row>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                    </Stack>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                    </Stack>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                        <div className='border border-dark col p-5 text-center'>편의성이미지</div>
                    </Stack>
                    <Row className='mt-4'>
                        <div className='separateLine p-2'></div>
                    </Row>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                    </Stack>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                    </Stack>
                    <Stack direction='horizontal' gap={3} className='col-auto mt-4' >
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                        <div className='border border-dark col p-5 text-center'>음식이미지</div>
                    </Stack>
                    <Row className='mt-4'>
                        <ButtonGroup size='sm' className='gap-3 '>
                            <Button variant="Light" className='border border-dark'>일식</Button>
                            <Button variant="Light" className='border border-dark'>돈가스</Button>
                            <Button variant="Light" className='border border-dark'>양식</Button>
                            <Button variant="Light" className='border border-dark'>초밥</Button>
                            <Button variant="Light" className='border border-dark'>김밥</Button>
                            <Button variant="Light" className='border border-dark'>분식</Button>
                            <Button variant="Light" className='border border-dark'>한식</Button>
                        </ButtonGroup>
                    </Row>
                    <Row className='mt-4'>
                        <ButtonGroup size='sm' className='gap-3'>
                            <Button variant="Light" className='border border-dark'>찌개</Button>
                            <Button variant="Light" className='border border-dark'>피자</Button>
                            <Button variant="Light" className='border border-dark'>스테이크</Button>
                            <Button variant="Light" className='border border-dark'>카레</Button>
                            <Button variant="Light" className='border border-dark'>중식</Button>
                            <Button variant="Light" className='border border-dark'>샤브샤브</Button>
                        </ButtonGroup>
                    </Row>
                    <Row className='mt-4'>
                        <ButtonGroup size='sm' className='gap-3'>
                            <Button variant="Light" className='border border-dark'>햄버거</Button>
                            <Button variant="Light" className='border border-dark'>회식</Button>
                            <Button variant="Light" className='border border-dark'>점심</Button>
                            <Button variant="Light" className='border border-dark'>해물</Button>
                        </ButtonGroup>
                    </Row>
                    <Row className='mt-4 text-center'>
                        <div className='d-flex justify-content-center'>
                            <Button variant="secondary" className='d-flex'><span>닫기</span><ChevronUp className='ms-2 mt-1'/></Button>
                        </div>
                    </Row>
            
            <Row>
                <div id='footer'>
                    <div className='text-center' id='nav'>
                        <Navbar expand="lg">
                            <Container >
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                                        <Nav.Link href="#link">이용약관예약</Nav.Link>
                                        <Nav.Link href="#link">문의 사항</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                        
                        <div className='border border-dark d-flex justify-content-center col-2' ><span className='text-center'>로고이미지</span></div>
                        <div className='text-center'>(주) FreeFood</div>
                        
                </div>
            </Row>
                    
                
        </Container>

    )
}

export default Main