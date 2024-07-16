import React from 'react';
import {Row, Col, Button, Ratio} from 'react-bootstrap';
import {ChatDotsFill, ChevronRight} from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import UserLayout from '../UserLayout';
import {FaDog, FaParking} from "react-icons/fa";
import {MdOutlineDoorSliding} from "react-icons/md";
import {CgHomeScreen} from "react-icons/cg";
import {FaTruckRampBox} from "react-icons/fa6";
import {FaElevator} from "react-icons/fa6";

const Restaurant = () => { 
    return (
        <UserLayout>
            <Row className='border border-dark text-center foodImage'>
                <div className='bannerText'>음식 이미지</div>
                <div className='border border-dark w-50 foodIntroduce'><p className='mb-0 mt-4'>음식점소개</p></div>
            </Row>
            <Row>
                <Col>
                    <div className='row d-flex float-start ms-2 mt-2'>중계역/분식, 김밥</div>
                </Col>
            </Row>
            <div className='mt-2 ms-3'>
                <div className='fw-bold d-inline row'>★★★☆☆ 3.26</div>
                <div className='ms-4 d-inline'><ChatDotsFill/>102</div>
            </div>
            
            <Row className='mt ms-1'>
                가격대: 5,000 ~ 15,000원
            </Row>
            <Row>
                <Col className='ps-3'>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2'>엘레베이터</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>키오스크</Button>
                    <Button variant="" size='sm' className='foodBtn border border-dark fw-bold mt-2 ms-2'>자동문</Button>
                </Col>
            </Row>
            <Row className='mt-3 mx-1'>
                <Table striped bordered hover className='fs-5'>
                    <thead>
                        <tr className='text-center span3'>
                            <th>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center bg-light'>
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
            <hr/>
            <Row>
                <p>편의성(barrier-free)</p>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col><FaElevator className='me-2 mb-2 fs-5'/>엘레베이터</Col><Col><FaTruckRampBox className='me-2 mb-2 fs-5'/>경사로</Col><Col><CgHomeScreen className='me-2 mb-2 fs-5'/>키오스크</Col>
                    </Row>
                    <Row>
                        <Col><MdOutlineDoorSliding className='me-2 mb-2 fs-5'/>자동문</Col><Col><FaParking className='me-2 mb-2 fs-5'/>주차장</Col><Col className='d-flex px-0'><FaDog className='me-2 mb-2 fs-5'/><div className=''>안내견 동반가능</div></Col>
                    </Row>
                </Col>
            </Row>
            <Row className='mt-3'>
                <div className='mb-3'>메뉴</div>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div><p className='text-center'>음식명</p>
                </Col>
                <Col className='ps-0 pe-0'>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div><p className='text-center'>음식명</p>
                </Col>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>음식<br/>이미지</p></div><p className='text-center'>음식명</p>
                </Col>
            </Row>
            <Row>
                <div className='separateLine p-2'></div>
            </Row>
            <Row className='mt-3'>
                <div className='mb-3'>사진</div>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
                <Col className='ps-0 pe-0'>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
                <Col className='ps-0 pe-0'>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
                <Col>
                    <div className='mx-auto border border-dark text-center p-4'><p className='foodImageText'>리뷰<br/>이미지</p></div>
                </Col>
            </Row>
            <Row className='text-center mt-2 mb-2'>
                <Col>
                    전체 사진 보기(738)
                </Col>
            </Row>
            <Row>
                <div className='separateLine p-2'></div>
            </Row>
            <Row className='mt-2'>
                <Col>
                
                    리뷰
                    <hr className='mt-2 row'/>
                    <Row>
                        <Col xs={11}>
                            <pre>
                                아침 일찍 일어나서 부리나케 달려왔습니다. 이집의 메뉴들은 <br/>
                                하나같이 훌륭해요. 매일매일 먹고싶습니다. <br/>
                                다른분들께도 추천드려요. <br/>
                            </pre>
                        </Col>
                        <Col xs={1}>
                            <ChevronRight className='mt-5'/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='ms-2 mb-0'> 헝이자노 2024/04/02 방문</p>
                        <p className='ms-2'>★★★☆☆ 3.26</p>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={11}>
                            <pre>
                                아무래도 저는 이걸 먹기위해 태어난거 같아요
                            </pre>
                        </Col>
                        <Col xs={1}>
                            <ChevronRight className='mt-5'/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='ms-2 mb-0'> 내 누군지 아니 2024/04/02 방문</p>
                        <p className='ms-2'>★★★★★ 5.00</p>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={11}>
                            <pre>
                                그냥 오늘따라 먹고싶었어요
                            </pre>
                        </Col>
                        <Col xs={1}>
                            <ChevronRight className='mt-5'/>
                        </Col>
                    </Row>
                    <Row>
                        <p className='ms-2 mb-0'> 모르나 2024/04/02 방문</p>
                        <p className='ms-2'>★★★★☆ 4.00</p>
                    </Row>
                </Col>
                <hr className='mb-2'/>
                <div className='text-center'>리뷰 더 보기 (162)</div>
            </Row>
            <Row>
                <div className='separateLine p-2'></div>
            </Row>
            <Row className='mt-2 mb-2'>
                <Col>
                    <div className='d-inline'>주소</div><div className='d-inline ms-4'>서울 중구 퇴계로27길 14</div>
                </Col>
            </Row>
            <Row>
                <Ratio aspectRatio={1 / 2} className='border border-dark'>
                    <div className='d-flex align-items-center justify-content-center'>지도이미지</div>
                </Ratio>
            </Row>
            <Row className='mt-3'>
                <div>레스토랑 정보</div>
                <hr className='mb-2 mt-2'/>
                <div>음식점 전화번호 : 010-0000-0000</div>
                <hr className='mb-2 mt-2'/>
                <div className='mb-2'>예약 가능여부 : 가능</div>
            </Row>
            <Row className='restaurantBottomFixBtn'>
                <Col className='px-0'>
                    <Button href='#' variant="warning" className='w-100 border-dark'>
                        리뷰작성
                    </Button>
                </Col>
                <Col className='px-0'>
                    <Button href='#' variant="warning" className='w-100 border-dark'>
                        인터넷예약
                    </Button>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default Restaurant