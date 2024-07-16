import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {GeoAlt, Grid3x3Gap} from 'react-bootstrap-icons';
import Header from '../Header';

const RestaurantFilter = () => {
    return (
        <Container className='border border-dark Container restaruntListFilter'>
            <Row className=''>
                <Col className='justify-content-center'>
                    <Header/>
                    <Row className='mt-3'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <GeoAlt className='me-2 fs-4'/>
                            <Form.Select aria-label="Default select example">
                                <option>지역</option>
                                <option value="1">서울</option>
                                <option value="2">경기</option>
                                <option value="3">인천</option>
                            </Form.Select>
                        </div>
                    </Row>
                    <Row className='mt-3'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <Grid3x3Gap className='me-2 fs-4'/>
                            <Form.Select aria-label="Default select example">
                                <option>전체</option>
                                <option value="1">서울</option>
                                <option value="2">경기</option>
                                <option value="3">인천</option>
                            </Form.Select>
                        </div>
                    </Row>
                    <Row className='price'>
                        <Col>
                            가격대
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <Form.Select aria-label="Default select example">
                                <option>선택</option>
                                <option value="1">1,000 ~ 10,000 (원)</option>
                                <option value="2">10,000 ~ 30,000 (원)</option>
                                <option value="3">30,000 ~ 60,000</option>
                                <option value="4">60,000 ~ 100,000</option>
                            </Form.Select>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            영업시간
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs={8}>
                            <div className='d-flex align-items-center justify-content-center'>
                                <Form.Select aria-label="Default select example">
                                    <option>지정하지 않음</option>
                                    <option value="1">아침</option>
                                    <option value="2">점심</option>
                                    <option value="3">밤 10시 이후 입점 가능</option>
                                    <option value="4">밤 12시 이후 입점 가능</option>
                                    <option value="4">아침까지 영업</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <Form className='d-flex float-end mb-0'>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="d-flex align-items-center justify-content-center float-end">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={'일요일영업'}
                                    />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            편의성(barriar-free)
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Form className='d-flex float-end mb-0'>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="d-flex align-items-center justify-content-center float-end">
                                    <Form.Check
                                        inline
                                        label="엘레베이터"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="경사로"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="키오스크"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="자동문"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-4`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Row>
                    <Row className='mt-3'>
                        <Form className='d-flex float-end mb-0'>
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="d-flex align-items-center justify-content-center float-end">
                                        <Form.Check
                                            inline
                                            label="주차장"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="자동문"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="안내견 동반가능"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                        </Form>
                    </Row>
                    <hr className='hrLine'/>
                    <Row className='mb-3'>
                        <Col xs={4}>
                            <Button variant="secondary" className='clBtn w-100'><span>초기화</span></Button>
                        </Col>
                        <Col xs={8}>
                            <Button variant="secondary" className='clBtn w-100'><span>검색</span></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default RestaurantFilter