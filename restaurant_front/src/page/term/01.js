import {Container, Row, Navbar, Nav} from 'react-bootstrap'
import {ArrowUpCircle} from 'react-bootstrap-icons';

const TermsOfService = () => {
    return (
        <Container className='border border-dark Container'>
            <Row>
                <pre className='termsText'>
                    비프리 이용약관 환영합니다!<br/>
                    비프리(be-free)의 서비스를 이용해 주셔서 감사합니다.<br/><br/>
                    아래는 비프리 서비스 이용에 대한 중요한 사항을 안내 드립니다. 비프<br/>
                    리 서비스를 이용하시는 경우, 이 약관에 동의하신 것으로 간주됩니다.<br/><br/>
                    *서비스 내용*<br/>
                    비프리는 XXX를 제공합니다. 서비스 이용 시간 및 방법은 XXX입니다.<br/>
                    서비스 이용 중 발생하는 문의사항은 XXX로 문의하시기 바랍니다.<br/><br/>
                    *이용자의 권리 및 의무*<br/>
                    서비스 이용 시 이용자는 XXX를 준수해야 합니다. 이용자는 서비스 이용<br/>
                    시 발생하는 비용에 대해 책임을 져야 합니다. 이용자는 타인의 서비스 이<br/>
                    용을 방해해서는 안 됩니다.<br/><br/>
                    *서비스 제공의 중지*<br/>
                    비프리는 기술적 문제 또는 서비스 개선을 위해 서비스 제공을 일시적으<br/>
                    로 중단할 수 있습니다. 중단 예정일은 미리 공지할 수 있습니다.<br/><br/>
                    *개인정보 보호*<br/>
                    비프리는 이용자의 개인정보를 보호하기 위해 최선을 다하며, 개인정보<br/> 
                    처리 방침에 따라 이를 관리합니다. 이용자는 개인정보 제공에 동의하지<br/>
                     않을 수 있습니다.<br/><br/>
                    *책임 제한*<br/>
                    비프리는 정당한 사유 없이 발생하는 서비스 이용 중 발생하는 손해에 대<br/>
                    해 책임을 지지 않습니다. 이용자가 서비스 이용으로 인해 타인에게 발생<br/>
                    시킨 손해에 대해서도 비프리는 책임을 지지 않습니다.<br/><br/>
                    *약관의 변경*<br/>
                    비프리는 필요 시 이 약관을 개정할 수 있으며, 변경 사항은 사전 공지 후<br/>
                     시행됩니다. 변경된 약관에 대한 이용자의 동의는 변경 후 서비스 이용으로<br/>
                      간주됩니다.<br/><br/>
                    *기타*<br/>
                    기타 서비스 이용에 관련된 사항은 비프리의 정책 및 운영규정에 따릅니<br/>
                    다. 본 약관의 해석에 관하여는 비프리의 명시적 동의가 있어야 합니다. 이<br/>
                    용약관은 XXXX년 XX월 XX일부터 시행됩니다.             
                </pre>
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

export default TermsOfService