import {Container, Row, Navbar, Nav} from 'react-bootstrap'
import {ArrowUpCircle} from 'react-bootstrap-icons';

const PrivacyPolicy = () => {
    return (
        <Container className='border border-dark Container text-center'>
            <p className='fs-5 fw-bold mb-4'>비프리 개인정보처리방침</p>
            <p className='fw-bold mb-4'>본 개인정보처리방침의 목차는 아래와 같습니다.</p>
            <p className='fw-bold'>
                관계법령이 요구하는 개인정보처리방침의 필수 사항과 비프리 자체적으로
                이용자 개인정보 보호에 있어 중요하게 판단하는 내용을 포함하였습니다.
            </p>
            <pre className='mt-5 privacyPolicy'>
                1. 개인정보처리방침의 의의<br/>
                2. 수집하는 개인정보 (필수 안내사항)<br/>
                3. 수집한 개인정보의 이용(필수 안내사항)<br/>
                4. 개인정보의 제공 및 위탁(필수 안내사항)<br/>
                5. 개인정보의 파기(필수 안내사항)<br/>
                6. 이용자 및 법정대리인의 권리와 행사 방법(필수 안내사항)<br/>
                7. 개인정보를 위한 비프리의 노력(필수 안내사항)<br/>
                8. 개인정보 보호책임자 및 담당자 안내(필수 안내사항)<br/>
                9. 개인정보의 처리 (필수 안내사항)<br/>
                10. 본 개인정보처리방침의 적용범위<br/>
                11. 계정 전 고지 의무
            </pre>
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

export default PrivacyPolicy