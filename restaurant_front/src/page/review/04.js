import {Row, Col, Form, Button} from 'react-bootstrap'
import UserLayout from '../UserLayout';

const ReviewUpdate = () => {
    return (
        <UserLayout>
            <Row>
                <Col className='mx-5 border border-dark mt-5 mb-5'>
                    <div className='fw-bold text-center mt-3 ms-3' >후기 수정</div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>별점</Form.Label>
                            <Form.Control type="text" value={'★★★☆☆ 3.26'} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>감상평</Form.Label>
                            <Form.Control as="textarea" rows={5} value={
                                `점심 엄선 코스\n\n점심시간에 잠깐 들려 먹기에 최상인 음식점,혼자서 가도 눈치보지 않고 식사할 수 있점 이 이 가게의 가장 큰 메리트입니다. 앞으로도 자주 이용할 것 같아요. 점심에 가실곳 없으시면 일단 여기로와서 잡숴보세요. 책임은 안질건데 일단 드셔보셔.`
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>편의성</Form.Label>
                            <Form.Control as="textarea" rows={3} value={`경사로가 있다고 해서 휠체어를 타고 갔는데 경사로가 파손되어 있어서 이용할 수 가 없었습니다.`}/>
                        </Form.Group>
                    </Form>
                
                    <Row className='float-end mb-4'>
                        <Col className='px-2'>
                            <Button variant="secondary" className='cancelBtn' href='/login'><span>취소</span></Button>
                        </Col>
                        <Col className='ps-2'>
                            <Button variant="secondary" className='saveBtn' href='#'><span>저장</span></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default ReviewUpdate