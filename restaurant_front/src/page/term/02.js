import {Row, Col} from 'react-bootstrap'
import UserLayout from '../UserLayout'

const PrivacyPolicy = () => {
    return (
        <UserLayout>
            <Row>
                <Col>
                    <div>
                        <p className='fs-5 fw-bold mt-3'>개인 정보 처리 방침</p>
                    </div>
                    <Row>
                        <hr/>
                        <p className='fw-bold float-start'>
                            시행일: 2024년 07월 10일
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <pre className='privacyPolicy'>
                                
                            </pre>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </UserLayout>
    )
}

export default PrivacyPolicy