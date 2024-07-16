import {Row, Col, Form, Button} from 'react-bootstrap'
import UserLayout from '../UserLayout';

const ReviewCreate = () => {
    return (
        <UserLayout>
            <Row>
                <Col className='mx-5 border border-dark mt-5 mb-5'>
                    <div className='fw-bold text-center mt-3 ms-3' >후기 수정</div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>별점</Form.Label>
                            <Form.Control type="text" value={'☆☆☆☆☆ 0.00'} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>감상평</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder='감상평을 적으세요.' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>편의성</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='편의성에 대한 후기를 20글자 내외로 써주세요.'/>
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

export default ReviewCreate