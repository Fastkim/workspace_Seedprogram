import React from 'react';
import {Container, Row, Col, Form, Button, Nav, Navbar} from 'react-bootstrap';
import {Justify, Diagram3, ChevronDown, ChatDotsFill, ChevronCompactLeft, ChevronCompactRight, Search, ArrowUpCircle} from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';

const RestaurantList = () => {
    return (
        <Container className='border border-dark Container'>
            <Row className='text-center header'>
                <Col className='pe-1 '><div className='w-25 h-100 border border-dark float-end d-flex align-items-center justify-content-center bg-white'>로고</div></Col>
                <Col className='ps-2'><span className='float-start align-middle'>SINCE 2024<br/>B E F R E E</span> <Justify className='float-end mt-2' id='list'/></Col>
            </Row>
            <Row className='mt-3'>
                <Form inline >
                    <Row>
                    <Col xs="">
                        <Form.Control
                        type="text"
                        placeholder="키워드를 검색하세요"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">검색</Button>
                    </Col>
                    </Row>
                </Form>
            </Row>
            <Row>
                <Col>
                    <Diagram3 className='fs-3 float-start'/>
                    <Button variant="" className='d-flex border border-dark float-start ms-3 me-2'><span>가격대</span><ChevronDown className='ms-2 mt-1'/></Button>
                    <div className='d-flex mt-1'>기타 검색 조건</div>
                </Col>
            </Row>
            <Row className='mt-3 border border-dark p-1 bg-dark text-white'>
                <Col><div>중구의 맛집</div></Col>
                <Col><div className='float-end'>1-20 / 320</div></Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <div className='fs-5 fw-bold'>가게이름</div>
                            <div className='ms-3'><ChatDotsFill/>102</div>
                        </Col>
                        <Col>
                            <Button variant="dark" className='float-end'><span>예약</span></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    충무로역 / 비빔밥, 제육볶음, 철판구이, 한식
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
                <Col className='ps-0 pe-0'>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    가게설명<br/>
                    ★★★☆☆ 3.26 <br/>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2'>엘레베이터</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>키오스크</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>자동문</Button>
                </Col>
            </Row>
            <Row className='mt-3 mx-1'>
                <Table striped bordered hover className='fs-5'>
                    <thead>
                        <tr className='text-center span3'>
                            <th >일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <div className='separateLine p-2'></div>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Row>
                        <Col className='d-flex align-items-center'>
                            <div className='fs-5 fw-bold'>가게이름</div>
                            <div className='ms-3'><ChatDotsFill/>49</div>
                        </Col>
                        <Col>
                            <Button variant="dark" className='float-end'><span>예약</span></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    명동역 / 스테이크, 쇠고기 요리
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
                <Col className='ps-0 pe-0'>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    가게설명<br/>
                    ★★★☆☆ 3.26 <br/>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2'>엘레베이터</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>키오스크</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>자동문</Button>
                </Col>
            </Row>
            <Row className='mt-3 mx-1'>
                <Table striped bordered hover className='fs-5'>
                    <thead>
                        <tr className='text-center span3'>
                            <th >일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <div className='separateLine p-2'></div>
            </Row>
            <Row className='mt-4 text-center fs-4'>
                <div><ChevronCompactLeft className='mb-1'/> 이전 &nbsp; 1  &nbsp; 2 &nbsp; 3 &nbsp; 4 &nbsp; 5 &nbsp; 다음 <ChevronCompactRight className='mb-1'/></div>
            </Row>
            <Row>
                <div className='footerSearch'>
                    <p className='mt-3'>다른 종류의 요리 찾기</p>
                    <p className='m-0'><Search className='me-2'/>충무로 한식</p><hr className='m-2'/>
                    <p className='m-0'><Search className='me-2'/>충무로 한식</p><hr className='m-2'/>
                    <p className='m-0'><Search className='me-2'/>충무로 한식</p><hr className='m-2'/>
                    <p className='m-0'><Search className='me-2'/>충무로 한식</p><hr className='m-2'/>
                </div>
            </Row>
            <Row className='mt-3'>
                <Col className='fw-bold'>
                    인기 지역 및 종류
                </Col> 
            </Row>
            <Row>
                <p className='footerNav text-center mt-4'>명동 | 을지로입구 | 을지로 3가 | 을지로4가 종로3가 | 종로5가 | 명동점심 | 을지로점심 |</p>
                <p className='footerNav text-center'>종로점심 | 명동 교자(만두) | 명동칼국수 | 충무로 타코 | 충무로 선술집 | 명동 카페 | </p>
                <p className='footerNav text-center'>충무로 카페 | 을지로입구 카페 | 종로 카페 | 종로 호프 |</p>
            </Row>
            <Row>
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

export default RestaurantList