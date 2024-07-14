import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {ChevronLeft, Google, EyeSlash} from 'react-bootstrap-icons';


const Login = () => {
    return (
        <Container className='border border-dark loginContainer'>
            <Row className='title mt-4'>
                <Col>
                    <Row>
                        <Col className='float-start mt-2'>
                            <ChevronLeft/>
                        </Col>
                        <Col className='loginText'>
                            <p>로그인</p>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <p>비프리의 회원이 되어 다양한 서비스를 누리세요.</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Form className='loginForm'>
                    <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" placeholder="아이디를 입력하세요." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label><p className='float-end'><EyeSlash className='me-1'/>숨기기</p>
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
                    </Form.Group>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="아이디저장"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                        </div>
                    ))}
                </Form>
            </Row>
            <Row className='gap-3 mx-2'>
                <Link to={'/'} className=''>
                    <Button variant='outline-secondary' size='lg' className='loginBtn'>로그인</Button>{' '}
                </Link>
                <div>
                    <Button variant='outline-secondary' size='lg' className='loginUpBtn'>회원가입</Button>{' '}
                </div>
            </Row>
            <Row className='mt-2'>
                <div className='hr-sect'>
                    OR
                </div>
            </Row>
            <Row className='gap-3 mx-2 my-2 mb-4 '>
                <div>
                    <Button variant='outline-secondary' size='lg' className='loginBtn d-flex justify-content-center'><Google className='mt-1 me-2'/>Google 계정으로 로그인</Button>{' '}
                </div>
                <div>
                    <Button variant='outline-secondary' size='lg' className='loginUpBtn d-flex justify-content-center'><div className='kakaoLogo border border-black me-2'>카카오 이미지</div>Kakao 계정으로 로그인</Button>{' '}
                </div>
            </Row>
        </Container>
    )
}

export default Login