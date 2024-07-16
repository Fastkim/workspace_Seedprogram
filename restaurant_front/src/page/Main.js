import {Form, Button, Row, Col, Stack, ButtonGroup} from 'react-bootstrap'
import {ChevronDown, ChevronUp} from 'react-bootstrap-icons';
import UserLayout from './UserLayout';

const Main = () => {
    return (
            <UserLayout>
                <Row>
                    <Col>
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
                                    <Button variant="warning">Search</Button>{' '}
                                </Form>
                            </Col>
                        </Row>
                        <Row className='border border-dark p-4 col-auto'>
                            <Col className='text-center fw-bold'>
                                배너이미지
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
                        <Button variant="warning" className='d-flex plusBtn btn'><span>더보기</span><ChevronDown className='ms-2 mt-1'/></Button>
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
                        <Button variant="warning" className='border border-dark'>일식</Button>
                        <Button variant="warning" className='border border-dark'>돈가스</Button>
                        <Button variant="warning" className='border border-dark'>양식</Button>
                        <Button variant="warning" className='border border-dark'>초밥</Button>
                        <Button variant="warning" className='border border-dark'>김밥</Button>
                        <Button variant="warning" className='border border-dark'>분식</Button>
                        <Button variant="warning" className='border border-dark'>한식</Button>
                    </ButtonGroup>
                </Row>
                <Row className='mt-4'>
                    <ButtonGroup size='sm' className='gap-3'>
                        <Button variant="warning" className='border border-dark'>찌개</Button>
                        <Button variant="warning" className='border border-dark'>피자</Button>
                        <Button variant="warning" className='border border-dark'>스테이크</Button>
                        <Button variant="warning" className='border border-dark'>카레</Button>
                        <Button variant="warning" className='border border-dark'>중식</Button>
                        <Button variant="warning" className='border border-dark'>샤브샤브</Button>
                    </ButtonGroup>
                </Row>
                <Row className='mt-4'>
                    <ButtonGroup size='sm' className='gap-3'>
                        <Button variant="warning" className='border border-dark'>햄버거</Button>
                        <Button variant="warning" className='border border-dark'>회식</Button>
                        <Button variant="warning" className='border border-dark'>점심</Button>
                        <Button variant="warning" className='border border-dark'>해물</Button>
                    </ButtonGroup>
                </Row>
                <Row className='mt-4 text-center'>
                    <div className='d-flex justify-content-center'>
                        <Button variant="warning" className='d-flex clBtn'><span>닫기</span><ChevronUp className='ms-2 mt-1'/></Button>
                    </div>
                </Row>
            </UserLayout>
    )
}

export default Main
